import { Clock } from 'lucide-react';
import { formatTime } from '../../utils/helpers';
import { brewMethods } from '../../data/brewMethods';

const BrewTimer = ({
    darkMode,
    brewTimer,
    isTimerRunning,
    setIsTimerRunning,
    startTimer,
    selectedMethod,
    setSelectedMethod
}) => {
    return (
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Clock className="w-6 h-6 text-green-500" />
                Brew Timer
            </h3>
            <div className="space-y-4">
                <select
                    value={selectedMethod.name}
                    onChange={(e) => setSelectedMethod(brewMethods.find(m => m.name === e.target.value))}
                    className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
                >
                    {brewMethods.map(method => (
                        <option key={method.name} value={method.name}>{method.name}</option>
                    ))}
                </select>

                <div className="text-center">
                    <div className={`text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {formatTime(brewTimer)}
                    </div>
                    <button
                        onClick={() => isTimerRunning ? setIsTimerRunning(false) : startTimer(selectedMethod.time)}
                        className={`px-6 py-2 rounded-full ${isTimerRunning ? 'bg-red-500' : 'bg-green-500'} text-white hover:opacity-80 transition`}
                    >
                        {isTimerRunning ? 'Stop' : 'Start Timer'}
                    </button>
                </div>

                <div className={`mt-4 p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Steps:</h4>
                    <ol className={`list-decimal list-inside space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedMethod.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default BrewTimer;