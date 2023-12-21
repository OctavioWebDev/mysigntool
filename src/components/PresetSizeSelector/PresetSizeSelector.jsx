import React, { useState } from 'react';
import './PresetSizeSelector.css';

const PresetSizeSelector = ({ onSelectSize, onResetCustomSize }) => {
    const sizes = [
        { label: 'Small 10x3', dimensions: { width: 10, height: 3 } },
        { label: 'Medium 13x4', dimensions: { width: 13, height: 4 } },
        { label: 'Large 21x6', dimensions: { width: 21, height: 6 } },
    ];

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (dimensions) => {
        setSelectedSize(dimensions);
        onSelectSize(dimensions);
        onResetCustomSize();
    };

    return (
        <div className="presetSizeSelector">
            {sizes.map((size, index) => (
                <button
                    key={index}
                    className={`sizeButton ${selectedSize === size.dimensions ? 'selected' : ''}`}
                    onClick={() => handleSizeSelection(size.dimensions)}
                >
                    {size.label}
                </button>
            ))}
        </div>
    );
};

export default PresetSizeSelector;
