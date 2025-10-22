import CoffeeCalculator from '../ui/CoffeeCalculator';
import BrewTimer from '../ui/BrewTimer';

const BrewGuideSection = ({
    darkMode,
    coffeeAmount,
    setCoffeeAmount,
    waterAmount,
    setWaterAmount,
    brewTimer,
    isTimerRunning,
    setIsTimerRunning,
    startTimer,
    selectedMethod,
    setSelectedMethod
}) => {
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} pt-24 px-4`}>
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Perfect Brew Guide
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <CoffeeCalculator
                        darkMode={darkMode}
                        coffeeAmount={coffeeAmount}
                        setCoffeeAmount={setCoffeeAmount}
                        waterAmount={waterAmount}
                        setWaterAmount={setWaterAmount}
                    />

                    <BrewTimer
                        darkMode={darkMode}
                        brewTimer={brewTimer}
                        isTimerRunning={isTimerRunning}
                        setIsTimerRunning={setIsTimerRunning}
                        startTimer={startTimer}
                        selectedMethod={selectedMethod}
                        setSelectedMethod={setSelectedMethod}
                    />
                </div>
            </div>
        </div>
    );
};

export default BrewGuideSection;