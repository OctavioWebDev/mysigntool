import React, { useState } from 'react';

const ColorSelector = ({ onSelectColor }) => {
    const [selectedColor, setSelectedColor] = useState('');

    // Example color array (update with your actual colors)
    const colorMap = {
        '#FFD700': 'Gold', 
        '#FF69B4': 'Pink', 
        '#ADD8E6': 'Light Blue', 
        '#8F00FF': 'Violet', 
        '#FFFFFF': 'White', 
        '#0D98BA': 'Blue-Green', 
        '#FAFA33': 'Lemon',
        '#00008B': 'Navy',
        '#FFFDD0': 'Cream',
        '#90EE90': 'Light Green',
    };
    

    const colors = Object.keys(colorMap);

    const handleSelectColor = (color) => {
        setSelectedColor(color);

        const colorName = colorMap[color] || (color === 'RGB' ? 'RGB' : color);
        onSelectColor(colorName);

    };

    return (
        <div className="flex overflow-x-auto whitespace-nowrap p-2 gap-2">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`w-10 h-10 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-white' : 'border-transparent'} mr-4`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleSelectColor(color)}
                    title={colorMap[color]}
                />
            ))}
            {/* Special RGB box */}
            <div
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent mr-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                onClick={() => handleSelectColor('RGB')}
            />
        </div>
    );
};

export default ColorSelector;

