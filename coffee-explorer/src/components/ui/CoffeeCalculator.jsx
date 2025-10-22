import { Droplets } from 'lucide-react';
import { calculateRatio, getBrewStrength } from '../../utils/helpers';

const CoffeeCalculator = ({ darkMode, coffeeAmount, setCoffeeAmount, waterAmount, setWaterAmount }) => {
    const ratio = calculateRatio(waterAmount, coffeeAmount);
    const strength = getBrewStrength(ratio);

    return (
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Droplets className="w-6 h-6 text-blue-500" />
                Coffee Calculator
            </h3>
            <div className="space-y-4">
                <div>
                    <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Coffee (grams)
                    </label>
                    <input
                        type="range"
                        min="10"
                        max="30"
                        value={coffeeAmount}
                        onChange={(e) => setCoffeeAmount(Number(e.target.value))}
                        className="w-full"
                    />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{coffeeAmount}g</span>
                </div>
                <div>
                    <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Water (ml)
                    </label>
                    <input
                        type="range"
                        min="150"
                        max="500"
                        value={waterAmount}
                        onChange={(e) => setWaterAmount(Number(e.target.value))}
                        className="w-full"
                    />
                    <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{waterAmount}ml</span>
                </div>
                <div className={`p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-amber-100'}`}>
                    <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Ratio: 1:{ratio}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {strength}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCalculator;