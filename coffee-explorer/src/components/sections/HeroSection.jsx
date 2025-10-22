import { ChevronRight, Shuffle } from 'lucide-react';

const HeroSection = ({ darkMode, setActiveSection, randomRecipe }) => {
    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-amber-50 to-orange-100'} pt-20`}>
            <div className="text-center px-4 max-w-4xl">
                <h1 className={`text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Welcome to the World of Coffee
                </h1>
                <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Discover the rich history, diverse varieties, and delightful recipes that make coffee a beloved beverage around the globe.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => setActiveSection('recipes')}
                        className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition flex items-center gap-2"
                    >
                        Explore Recipes <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={randomRecipe}
                        className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition flex items-center gap-2"
                    >
                        <Shuffle className="w-5 h-5" /> Random Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;