import React, { useState } from 'react';
import '../neonSignToolStyles.css';

const TextDisplay = ({ text, font }) => {
    const [isGlowActive, setIsGlowActive] = useState(false);

    const handleGlowToggle = () => {
        setIsGlowActive(!isGlowActive);
    };

    const textDisplayStyle = {
        fontFamily: font,
        textShadow: isGlowActive ? "0 0 10px #2196f3, 0 0 20px #2196f3, 0 0 30px #2196f3" : "none"
    };

    return (
        <div>
            <label className="switch" style={{ position: 'relative', top: "415px", left: '20px' }}>
                <input type="checkbox" onChange={handleGlowToggle} />
                <span className="slider round"></span>
            </label>
            <div className="textDisplay" style={textDisplayStyle}>
                {text}
            </div>
        </div>
    );
};

export default TextDisplay;

