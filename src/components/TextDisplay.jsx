import React, { useState } from 'react';

const TextDisplay = ({ text }) => {
    const [isGlowActive, setIsGlowActive] = useState(false);

    const handleGlowToggle = () => {
        setIsGlowActive(!isGlowActive);
    };

    const textDisplayStyle = {
        textShadow: isGlowActive ? "0 0 10px #2196f3, 0 0 20px #2196f3, 0 0 30px #2196f3" : "none"
    };

    return (
        <div>
            <label className="switch" style={{ position: 'absolute', top: '10px', left: '10px' }}>
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

