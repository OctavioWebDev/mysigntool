import React, { useState } from 'react';

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
        <div className="flex justify-center">
            {sizes.map((size, index) => (
                <button
                    key={index}
                    className={`px-7 py-2.5 mx-2 mb-2 text-center border border-white rounded cursor-pointer transition duration-300 ease-in-out h-15 w-175 ${
                        selectedSize === size.dimensions ? 'bg-purple-600 border-purple-600 text-white' : 'bg-transparent text-white hover:bg-purple-500'
                    }`}
                    onClick={() => handleSizeSelection(size.dimensions)}
                >
                    {size.label}
                </button>
            ))}
        </div>
    );
};

export default PresetSizeSelector;

