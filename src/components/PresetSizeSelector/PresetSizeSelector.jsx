import React from 'react';
import './PresetSizeSelector.css';

const PresetSizeSelector = ({ onSelectSize }) => {
    const sizes = [
        { label: 'Small', dimensions: { width: 10, height: 3 } },
        { label: 'Medium', dimensions: { width: 13, height: 4 } },
        { label: 'Large', dimensions: { width: 21, height: 6 } },
    ];

    const handleSizeSelection = (dimensions) => {
        onSelectSize(dimensions);
    };

    return (
        <div className="presetSizeSelector">
            {sizes.map((size, index) => (
                <button
                    key={index}
                    className="sizeButton"
                    onClick={() => handleSizeSelection(size.dimensions)}
                >
                    {size.label}
                </button>
            ))}
        </div>
    );
};

export default PresetSizeSelector;
