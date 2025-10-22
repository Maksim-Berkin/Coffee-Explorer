import { MapPin, Coffee } from 'lucide-react';
import { coffeeOrigins } from '../../data/coffeeOrigins';

const OriginsSection = ({ darkMode, selectedOrigin, setSelectedOrigin }) => {
    // Конвертация координат в позицию на карте (проекция Меркатора)
    const getMapPosition = (lat, lon) => {
        const x = ((lon + 180) / 360) * 100;
        const latRad = (lat * Math.PI) / 180;
        const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
        const y = 50 - (mercN / (2 * Math.PI)) * 100;
        return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} pt-24 px-4 pb-12`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Coffee Origins Around the World
                </h2>
                <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Click on the pins to explore coffee-growing regions
                </p>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Карта мира */}
                    <div className="lg:col-span-3">
                        <div className={`relative rounded-lg overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                            {/* SVG карта мира */}
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                <svg
                                    viewBox="0 0 1000 563"
                                    className="absolute inset-0 w-full h-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Фон океана */}
                                    <rect width="1000" height="563" fill={darkMode ? '#1e293b' : '#bfdbfe'} />

                                    {/* Упрощенная карта континентов */}
                                    <g fill={darkMode ? '#374151' : '#86efac'} stroke={darkMode ? '#4b5563' : '#22c55e'} strokeWidth="1.5">
                                        {/* Северная Америка */}
                                        <path d="M 50 120 Q 80 100 120 110 L 160 120 Q 180 140 190 170 L 200 200 Q 210 220 200 240 L 180 260 Q 160 270 140 265 L 120 255 Q 100 240 90 220 L 80 190 Q 70 160 60 140 Z" />
                                        <path d="M 140 90 Q 160 80 180 85 L 200 95 Q 210 110 205 130 L 190 150 Q 170 160 150 155 L 135 145 Q 125 125 130 105 Z" />

                                        {/* Южная Америка */}
                                        <path d="M 240 260 Q 260 250 280 255 L 300 270 Q 310 290 315 320 L 320 360 Q 318 390 310 420 L 300 450 Q 290 470 275 480 L 255 485 Q 240 480 230 465 L 225 440 Q 220 410 222 380 L 225 350 Q 228 320 235 290 Z" />

                                        {/* Европа */}
                                        <path d="M 480 120 Q 500 110 520 115 L 540 125 Q 555 140 560 160 L 555 180 Q 545 195 525 200 L 505 198 Q 490 190 485 175 L 482 155 Q 480 135 485 125 Z" />

                                        {/* Африка */}
                                        <path d="M 500 200 Q 520 195 540 200 L 560 210 Q 575 225 580 250 L 585 280 Q 588 320 585 360 L 580 400 Q 570 430 555 450 L 535 465 Q 515 470 500 465 L 485 455 Q 475 435 472 410 L 470 380 Q 468 350 470 320 L 475 280 Q 480 240 490 215 Z" />

                                        {/* Азия */}
                                        <path d="M 580 130 Q 620 115 660 120 L 700 135 Q 740 150 770 170 L 800 195 Q 820 220 830 250 L 835 280 Q 830 305 815 320 L 790 330 Q 760 335 730 330 L 700 320 Q 670 305 650 285 L 630 260 Q 615 235 605 210 L 595 180 Q 588 155 590 135 Z" />

                                        {/* Юго-Восточная Азия и острова */}
                                        <path d="M 720 300 Q 740 295 760 300 L 780 315 Q 790 330 788 350 L 780 365 Q 765 375 745 372 L 728 365 Q 718 350 720 335 Z" />
                                        <path d="M 800 340 Q 815 335 830 340 L 845 355 Q 850 370 845 385 L 835 398 Q 820 405 805 400 L 795 388 Q 790 370 795 355 Z" />

                                        {/* Австралия */}
                                        <path d="M 750 420 Q 780 415 810 420 L 840 435 Q 860 455 865 480 L 862 505 Q 850 525 830 532 L 800 535 Q 770 530 750 515 L 740 495 Q 735 470 740 445 Z" />
                                    </g>

                                    {/* Линия экватора */}
                                    <line x1="0" y1="281.5" x2="1000" y2="281.5" stroke={darkMode ? '#64748b' : '#475569'} strokeWidth="1.5" strokeDasharray="8,4" opacity="0.4" />
                                    <text x="10" y="275" fill={darkMode ? '#94a3b8' : '#64748b'} fontSize="12" opacity="0.6">Equator</text>

                                    {/* Тропик Рака */}
                                    <line x1="0" y1="200" x2="1000" y2="200" stroke={darkMode ? '#64748b' : '#475569'} strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />

                                    {/* Тропик Козерога */}
                                    <line x1="0" y1="363" x2="1000" y2="363" stroke={darkMode ? '#64748b' : '#475569'} strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />

                                    {/* Метки происхождения кофе */}
                                    {coffeeOrigins.map((origin) => {
                                        const pos = getMapPosition(origin.lat, origin.lon);
                                        const isSelected = selectedOrigin?.name === origin.name;

                                        return (
                                            <g key={origin.name}>
                                                {/* Анимированная пульсация для выбранной точки */}
                                                {isSelected && (
                                                    <>
                                                        <circle
                                                            cx={pos.x * 10}
                                                            cy={pos.y * 5.63}
                                                            r="20"
                                                            fill={origin.color}
                                                            opacity="0.4"
                                                        >
                                                            <animate
                                                                attributeName="r"
                                                                from="20"
                                                                to="35"
                                                                dur="1.5s"
                                                                repeatCount="indefinite"
                                                            />
                                                            <animate
                                                                attributeName="opacity"
                                                                from="0.4"
                                                                to="0"
                                                                dur="1.5s"
                                                                repeatCount="indefinite"
                                                            />
                                                        </circle>
                                                    </>
                                                )}

                                                {/* Тень точки */}
                                                <circle
                                                    cx={pos.x * 10}
                                                    cy={pos.y * 5.63 + 2}
                                                    r={isSelected ? "14" : "10"}
                                                    fill="rgba(0,0,0,0.3)"
                                                    className="pointer-events-none"
                                                />

                                                {/* Точка на карте */}
                                                <circle
                                                    cx={pos.x * 10}
                                                    cy={pos.y * 5.63}
                                                    r={isSelected ? "14" : "10"}
                                                    fill={origin.color}
                                                    stroke="white"
                                                    strokeWidth="3"
                                                    className="cursor-pointer transition-all hover:r-14"
                                                    onClick={() => setSelectedOrigin(origin)}
                                                />

                                                {/* Внутренний круг */}
                                                <circle
                                                    cx={pos.x * 10}
                                                    cy={pos.y * 5.63}
                                                    r={isSelected ? "6" : "4"}
                                                    fill="white"
                                                    className="pointer-events-none"
                                                    opacity="0.8"
                                                />

                                                {/* Название региона */}
                                                <text
                                                    x={pos.x * 10}
                                                    y={pos.y * 5.63 - 20}
                                                    textAnchor="middle"
                                                    fill={darkMode ? 'white' : '#1f2937'}
                                                    fontSize="14"
                                                    fontWeight="bold"
                                                    className="pointer-events-none select-none"
                                                    style={{
                                                        textShadow: darkMode
                                                            ? '1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8)'
                                                            : '1px 1px 3px rgba(255,255,255,0.9), -1px -1px 3px rgba(255,255,255,0.9)'
                                                    }}
                                                >
                                                    {origin.name}
                                                </text>
                                            </g>
                                        );
                                    })}
                                </svg>
                            </div>

                            {/* Легенда */}
                            <div className={`absolute bottom-4 left-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} bg-opacity-95 p-3 rounded-lg shadow-lg backdrop-blur-sm`}>
                                <div className="flex items-center gap-2 text-sm">
                                    <Coffee className="w-5 h-5 text-amber-700" />
                                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Coffee Belt Regions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Информационная панель */}
                    <div className="lg:col-span-2">
                        <div className={`h-full p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                            {selectedOrigin ? (
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <MapPin className="w-8 h-8" style={{ color: selectedOrigin.color }} />
                                            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {selectedOrigin.name}
                                            </h3>
                                        </div>
                                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            Coordinates: {selectedOrigin.lat}°, {selectedOrigin.lon}°
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            About
                                        </h4>
                                        <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {selectedOrigin.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Flavor Profile
                                        </h4>
                                        <div className="flex gap-2 flex-wrap">
                                            {selectedOrigin.flavors.map(flavor => (
                                                <span
                                                    key={flavor}
                                                    className="px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                                                    style={{
                                                        backgroundColor: selectedOrigin.color + '30',
                                                        color: selectedOrigin.color,
                                                        border: `2px solid ${selectedOrigin.color}50`
                                                    }}
                                                >
                                                    {flavor}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Дополнительная информация */}
                                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                        <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            ☕ Fun Fact
                                        </h4>
                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {selectedOrigin.name === 'Ethiopia' && 'Coffee was discovered here by a goat herder named Kaldi around 850 AD!'}
                                            {selectedOrigin.name === 'Colombia' && 'Colombia produces some of the world\'s finest Arabica coffee beans.'}
                                            {selectedOrigin.name === 'Brazil' && 'Brazil is the world\'s largest coffee producer, accounting for about 40% of global supply.'}
                                            {selectedOrigin.name === 'Vietnam' && 'Vietnam is the world\'s second-largest coffee producer, specializing in Robusta beans.'}
                                            {selectedOrigin.name === 'Indonesia' && 'Home to the famous Kopi Luwak, one of the world\'s most expensive coffees.'}
                                            {selectedOrigin.name === 'Costa Rica' && 'Costa Rica was the first Central American country to establish a coffee industry.'}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <MapPin className={`w-16 h-16 mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                                    <p className={`text-lg mb-2 font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Select a region on the map
                                    </p>
                                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                        Click on any pin to explore coffee origins
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OriginsSection;