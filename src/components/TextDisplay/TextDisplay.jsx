import React, { useState } from 'react';

const TextDisplay = ({ text, font, glowColor }) => {
    const [isGlowActive, setIsGlowActive] = useState(false);

    const handleGlowToggle = () => {
        setIsGlowActive(!isGlowActive);
    };

    const isRgbGlow = glowColor === "RGB";
    const textDisplayClasses = `flex justify-center items-center text-5xl h-200 mx-2 py-2 border-none rounded bg-gray-800 text-white overflow-hidden ${isRgbGlow && isGlowActive ? 'rgbGlowEffect' : ''}`;

    const textDisplayStyle = {
        fontFamily: font,
        textShadow: isGlowActive ? (isRgbGlow ? "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 0, 255, 0.7)" : `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`) : "none",
        animation: isRgbGlow && isGlowActive ? 'rgbGlowEffect 3s ease-in-out infinite' : 'none'
    };

    return (
        <div className="relative">
            <div className={textDisplayClasses} style={textDisplayStyle}>
                {text}
            </div>
            <label className="absolute bottom-2 left-3 mb-2 ml-2 inline-flex items-center cursor-pointer">
                <input type="checkbox" onChange={handleGlowToggle} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Git Lit</span>
            </label>
        </div>
    );
};

export default TextDisplay;
