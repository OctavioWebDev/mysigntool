import React from 'react';
import './PresetSizeSelector.css';

const PresetSizeSelector = ({ onSelectSize }) => {
    const sizes = [
        { label: 'Small', dimensions: '10 x 3' },
        { label: 'Medium', dimensions: '13 x 4' },
        { label: 'Large', dimensions: '21 x 6' },
    ];

    return (
        <div className="presetSizeSelector">
            {sizes.map((size, index) => (
                <button
                    key={index}
                    className="sizeButton"
                    onClick={() => onSelectSize(size.dimensions)}
                >
                    {size.label}
                </button>
            ))}
        </div>
    );
};

export default PresetSizeSelector;
