import React, { useState } from 'react';

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
            {colors.map((color, index) => (
                <div
                    key={color}
                    className={`colorBox ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleSelectColor(color)}
                />
            ))}
        </div>
    );
};

export default ColorSelector;
