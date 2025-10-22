import { Coffee, Moon, Sun } from 'lucide-react';

const NavBar = ({ activeSection, setActiveSection, darkMode, setDarkMode }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Coffee className="w-8 h-8 text-amber-700" />
                        <h1 className="text-2xl font-bold">Coffee Explorer</h1>
                    </div>

                    <div className="flex gap-6 items-center">
                        <button
                            onClick={() => setActiveSection('home')}
                            className={`hover:text-amber-700 transition ${activeSection === 'home' ? 'text-amber-700 font-semibold' : ''}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setActiveSection('recipes')}
                            className={`hover:text-amber-700 transition ${activeSection === 'recipes' ? 'text-amber-700 font-semibold' : ''}`}
                        >
                            Recipes
                        </button>
                        <button
                            onClick={() => setActiveSection('brew')}
                            className={`hover:text-amber-700 transition ${activeSection === 'brew' ? 'text-amber-700 font-semibold' : ''}`}
                        >
                            Brew Guide
                        </button>
                        <button
                            onClick={() => setActiveSection('origins')}
                            className={`hover:text-amber-700 transition ${activeSection === 'origins' ? 'text-amber-700 font-semibold' : ''}`}
                        >
                            Origins
                        </button>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;