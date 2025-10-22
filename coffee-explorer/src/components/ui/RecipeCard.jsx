const RecipeCard = ({ recipe, darkMode }) => {
    return (
        <div
            className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400';
                }}
            />
            <div className="p-4">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {recipe.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {recipe.description}
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;