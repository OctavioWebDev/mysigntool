import React, { useState } from 'react';

const ColorSelector = ({ onSelectColor }) => {
    const [selectedColor, setSelectedColor] = useState('');

    // Example color array (update with your actual colors)
    const colors = ['#FFD700', '#FF69B4', '#ADD8E6', '#8F00FF', '#FFFFFF', '#0D98BA', '#FAFA33'];

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        if (onSelectColor) {
            onSelectColor(color);
        }
    };

    return (
        <div className="flex overflow-x-auto whitespace-nowrap p-2 gap-2">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`w-10 h-10 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-white' : 'border-transparent'} mr-4`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleSelectColor(color)}
                />
            ))}
            {/* Special RGB box */}
            <div
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent mr-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                onClick={() => handleSelectColor('rgb')}
            />
        </div>
    );
};

export default ColorSelector;

