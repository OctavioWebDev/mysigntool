import React, { useState } from 'react';

const CustomSizeSelector = ({ onSizeChange }) => {
    const [size, setSize] = useState({ width: 10, height: 3 });

    const handleSizeChange = (width, height) => {
        setSize({ width, height });
        if (onSizeChange) {
            onSizeChange({ width, height });
        }
    };

    return (
        <div className="customSizeSelector">
            <input
                type="range"
                min="10"
                max="118"
                value={size.width}
                onChange={(e) => handleSizeChange(e.target.value, size.height)}
            />
            <input
                type="range"
                min="3"
                max="37"
                value={size.height}
                onChange={(e) => handleSizeChange(size.width, e.target.value)}
            />
            <div>
                Custom Size: {size.width} x {size.height}
            </div>
        </div>
    );
};

export default CustomSizeSelector;
