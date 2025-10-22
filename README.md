# ☕ Coffee Explorer

A modern, interactive web application for coffee enthusiasts built with React and Vite. Explore coffee recipes, brewing methods, origins, and perfect your coffee-making skills with built-in tools.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

### 🏠 Home Section
- Welcoming hero section with coffee-themed gradient backgrounds
- Quick navigation to all sections
- Random recipe generator for inspiration
- Dark/light mode support

### 📖 Recipe Collection
- Gallery of 8 classic coffee recipes with beautiful imagery
- Detailed descriptions for each recipe
- Responsive grid layout
- Hover effects and smooth transitions

### 🧪 Brew Guide
- **Coffee Calculator**: Interactive tool to calculate perfect coffee-to-water ratios
  - Adjustable sliders for coffee (10-30g) and water (150-500ml)
  - Real-time ratio calculation (1:X format)
  - Brew strength indicator (Strong/Balanced/Light)
  
- **Brew Timer**: Step-by-step brewing assistant
  - Multiple brewing methods: Pour Over, French Press, Espresso, Cold Brew
  - Countdown timer with start/stop functionality
  - Detailed brewing instructions for each method
  - Visual time display in MM:SS format

### 🗺️ Coffee Origins Map
- Interactive world map showing major coffee-growing regions
- 6 featured origins: Ethiopia, Colombia, Brazil, Vietnam, Indonesia, Costa Rica
- Clickable location pins with animated pulse effects
- Detailed information panels featuring:
  - Regional descriptions
  - Flavor profiles with visual tags
  - Geographic coordinates
  - Fun facts about each origin
- Custom SVG world map with Coffee Belt visualization

### 🎨 Design Features
- Fully responsive design (mobile, tablet, desktop)
- Dark mode toggle with smooth transitions
- Consistent color scheme based on coffee/amber tones
- Smooth animations and hover effects
- Accessible UI components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coffee-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
Coffee-Explorer
├─ coffee-explorer
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.jsx
│  │  ├─ components
│  │  │  ├─ layout
│  │  │  │  └─ NavBar.jsx
│  │  │  ├─ sections
│  │  │  │  ├─ BrewGuideSection.jsx
│  │  │  │  ├─ HeroSection.jsx
│  │  │  │  ├─ OriginsSection.jsx
│  │  │  │  └─ RecipesSection.jsx
│  │  │  └─ ui
│  │  │     ├─ BrewTimer.jsx
│  │  │     ├─ CoffeeCalculator.jsx
│  │  │     └─ RecipeCard.jsx
│  │  ├─ data
│  │  │  ├─ brewMethods.js
│  │  │  └─ coffeeOrigins.js
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  └─ utils
│  │     └─ helpers.js
│  ├─ tailwind.config.js
│  └─ vite.config.js
└─ README.md

```

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 🎯 Key Components

### App.jsx
Central component managing:
- Navigation state
- Dark mode toggle
- Recipe data
- Calculator state (coffee/water amounts)
- Timer functionality
- Selected origin tracking

### NavBar
- Fixed navigation bar
- Section navigation buttons
- Dark/light mode toggle
- Responsive design

### Interactive Map
- Custom SVG world map
- Mercator projection for accurate positioning
- Animated location pins
- Dynamic info panels
- Coffee Belt visualization with Equator and Tropic lines

## 🎨 Customization

### Adding New Recipes
Edit `src/utils/helpers.js` and add to the `fallbackRecipes` array:
```javascript
{
  id: 9,
  title: 'Your Recipe Name',
  description: 'Recipe description',
  image: 'https://image-url.jpg'
}
```

### Adding Brewing Methods
Edit `src/data/brewMethods.js`:
```javascript
{
  name: 'Method Name',
  time: 180, // seconds
  steps: [
    'Step 1',
    'Step 2',
    // ...
  ]
}
```

### Adding Coffee Origins
Edit `src/data/coffeeOrigins.js`:
```javascript
{
  name: 'Region Name',
  lat: 0, // latitude
  lon: 0, // longitude
  description: 'Description',
  color: '#HEXCOLOR',
  flavors: ['Flavor1', 'Flavor2']
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Development Notes

- The app uses React hooks for state management
- All images use fallback URLs from Unsplash
- Timer uses `setInterval` for countdown functionality
- Map coordinates use Mercator projection for accurate positioning
- Dark mode is implemented with Tailwind's dark mode utilities

## 🔮 Future Enhancements

- [ ] Add user authentication
- [ ] Save favorite recipes
- [ ] Custom recipe creation
- [ ] Brewing history tracking
- [ ] Coffee bean database
- [ ] Community recipe sharing
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) support

---

Made with ☕ and ❤️ by coffee enthusiasts, for coffee enthusiasts.