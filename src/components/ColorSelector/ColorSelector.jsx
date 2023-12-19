import React, { useState } from 'react';
import './ColorSelector.css';

const ColorSelector = ({ colors, onSelectColor }) => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        if (onSelectColor) {
            onSelectColor(color);
        }
    };

    return (
        
        <div className="colorSelector">
            <div className="scrollContainer">
                <div className={`colorBox rgb ${selectedColor === 'RGB' ? 'selected' : ''}`}
                    onClick={() => handleSelectColor('RGB')}
                    /* Additional styling for RGB color box */ >
                </div>
            
                {colors.map((color, index) => (
                    <div
                        key={color}
                        className={`colorBox ${selectedColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleSelectColor(color)}
                    />
                    ))}
            </div>
        </div>
    );
};

export default ColorSelector;
