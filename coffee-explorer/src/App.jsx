import { useState, useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import HeroSection from './components/sections/HeroSection';
import RecipesSection from './components/sections/RecipesSection';
import BrewGuideSection from './components/sections/BrewGuideSection';
import OriginsSection from './components/sections/OriginsSection';
import { brewMethods } from './data/brewMethods';
import { fallbackRecipes } from './utils/helpers';

const App = () => {
  // Состояния навигации и темы
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Состояния для рецептов
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Состояния для калькулятора
  const [coffeeAmount, setCoffeeAmount] = useState(15);
  const [waterAmount, setWaterAmount] = useState(250);

  // Состояния для таймера
  const [brewTimer, setBrewTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(brewMethods[0]);

  // Состояния для карты происхождения
  const [selectedOrigin, setSelectedOrigin] = useState(null);

  // Загрузка рецептов при монтировании
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Таймер для заваривания
  useEffect(() => {
    let interval;
    if (isTimerRunning && brewTimer > 0) {
      interval = setInterval(() => {
        setBrewTimer(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, brewTimer]);

  // Функция загрузки рецептов из API
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      // Используем фолбэк данные с качественными английскими названиями и изображениями
      setRecipes(fallbackRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes(fallbackRecipes);
    }
    setLoading(false);
  };

  // Запуск таймера
  const startTimer = (seconds) => {
    setBrewTimer(seconds);
    setIsTimerRunning(true);
  };

  // Генератор случайного рецепта
  const randomRecipe = () => {
    if (recipes.length === 0) return;
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    alert(`Try this: ${random.title} - ${random.description}`);
  };

  return (
    <div className={darkMode ? 'dark bg-gray-900' : 'bg-white'}>
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {activeSection === 'home' && (
        <HeroSection
          darkMode={darkMode}
          setActiveSection={setActiveSection}
          randomRecipe={randomRecipe}
        />
      )}

      {activeSection === 'recipes' && (
        <RecipesSection
          darkMode={darkMode}
          recipes={recipes}
          loading={loading}
        />
      )}

      {activeSection === 'brew' && (
        <BrewGuideSection
          darkMode={darkMode}
          coffeeAmount={coffeeAmount}
          setCoffeeAmount={setCoffeeAmount}
          waterAmount={waterAmount}
          setWaterAmount={setWaterAmount}
          brewTimer={brewTimer}
          isTimerRunning={isTimerRunning}
          setIsTimerRunning={setIsTimerRunning}
          startTimer={startTimer}
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
        />
      )}

      {activeSection === 'origins' && (
        <OriginsSection
          darkMode={darkMode}
          selectedOrigin={selectedOrigin}
          setSelectedOrigin={setSelectedOrigin}
        />
      )}
    </div>
  );
};

export default App;