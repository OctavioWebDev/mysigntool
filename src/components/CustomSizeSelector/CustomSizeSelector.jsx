import React, { useState } from 'react';


const CustomSizeSelector = ({ onSizeChange }) => {
    const [size, setSize] = useState({ width: 10, height: 3 });

    const handleSizeChange = (newWidth) => {
        // Every 3 units of width equals 1 unit of height
        const newHeight = 3 + Math.floor((newWidth - 10) / 3);

        const newSize = {
            width: newWidth,
            height: Math.min(Math.max(newHeight, 3), 37) // Ensuring height stays within bounds
        };

        setSize(newSize);

        if (onSizeChange) {
            onSizeChange(newSize);
        }
    };

    return (
        <div className="customSizeSelector">
            <div className="customSizeSelectorBox">
            <label 
                for="large-range" 
                class="block mb-2 text-sm font-medium
                 text-gray-900
                  dark:text-white"
                  >
            </label>
                <input 
                    id="large-range" 
                    type="range" 
                    min="10"
                    max="118"
                    value={size.width}
                    onChange={(e) => handleSizeChange(parseInt(e.target.value))} 
                    class="w-full 
                    h-3
                    mx-2
                     bg-gray-200 
                     rounded-lg 
                     appearance-none 
                     cursor-pointer 
                     range-lg
                     dark:bg-gray-700"
                    >
                </input>
            <div>
                Size: {size.width} x {size.height}
            </div>
        </div>
    </div>
    );
};

export default CustomSizeSelector;

