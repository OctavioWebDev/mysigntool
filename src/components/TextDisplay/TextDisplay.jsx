import React, { useState } from 'react';
import './TextDisplay.css';  

const TextDisplay = ({ text, font, glowColor }) => {
    const [isGlowActive, setIsGlowActive] = useState(false);

    const handleGlowToggle = () => {
        setIsGlowActive(!isGlowActive);
    };

    const isRgbGlow = glowColor === "RGB";
    const textDisplayClasses = `textDisplay ${isRgbGlow && isGlowActive ? 'rgbGlowEffect' : ''}`;

    const textDisplayStyle = {
        fontFamily: font,
        textShadow: isGlowActive ? (isRgbGlow ? "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 0, 255, 0.7)" : `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`) : "none",
        animation: isRgbGlow && isGlowActive ? 'rgbGlowEffect 3s ease-in-out infinite' : 'none'
    };

    return (
        <div>
            <label className="switch" style={{ position: 'relative', top: "415px", left: '20px' }}>
                <input type="checkbox" onChange={handleGlowToggle} />
                <span className="slider round"></span>
            </label>
            <div className={textDisplayClasses} style={textDisplayStyle}>
                {text}
            </div>
        </div>
    );
};

export default TextDisplay;

