// Форматирование времени в минуты:секунды
export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Расчёт соотношения кофе к воде
export const calculateRatio = (water, coffee) => {
    return (water / coffee).toFixed(1);
};

// Определение крепости напитка
export const getBrewStrength = (ratio) => {
    const numRatio = parseFloat(ratio);
    if (numRatio < 14) return 'Strong brew';
    if (numRatio > 17) return 'Light brew';
    return 'Balanced brew';
};

// Фолбэк данные для рецептов
export const fallbackRecipes = [
    {
        id: 1,
        title: 'Classic Espresso',
        description: 'Strong, concentrated coffee shot with rich crema on top',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
    },
    {
        id: 2,
        title: 'Cappuccino',
        description: 'Espresso with steamed milk and velvety foam, perfectly balanced',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
    },
    {
        id: 3,
        title: 'Café Latte',
        description: 'Smooth espresso with steamed milk and light foam layer',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400'
    },
    {
        id: 4,
        title: 'Americano',
        description: 'Espresso diluted with hot water for a smooth, bold flavor',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
    },
    {
        id: 5,
        title: 'Mocha',
        description: 'Espresso with chocolate syrup, steamed milk, and whipped cream',
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400'
    },
    {
        id: 6,
        title: 'Macchiato',
        description: 'Espresso "marked" with a dollop of foamed milk',
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400'
    },
    {
        id: 7,
        title: 'Flat White',
        description: 'Espresso with microfoam milk, velvety smooth texture',
        image: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=400'
    },
    {
        id: 8,
        title: 'Cortado',
        description: 'Equal parts espresso and warm milk, perfectly balanced',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400'
    }
];