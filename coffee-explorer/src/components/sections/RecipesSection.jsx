import RecipeCard from '../ui/RecipeCard';

const RecipesSection = ({ darkMode, recipes, loading }) => {
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} pt-24 px-4`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Coffee Recipes
                </h2>
                {loading ? (
                    <div className={`text-center text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Loading delicious recipes...
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                darkMode={darkMode}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipesSection;