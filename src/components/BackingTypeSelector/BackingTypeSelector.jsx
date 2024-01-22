import React, { useState } from 'react';

const BackingTypeSelector = ({ onSelectBackingType }) => {
    const [selectedBackingType, setSelectedBackingType] = useState('');

    const backingTypes = [
        'Hollow-Out', 
        'Cut to Shape', 
        'Full Board', 
        'Stand'
    ];

    const handleSelectBackingType = (type) => {
        setSelectedBackingType(type);
        if (onSelectBackingType) {
            onSelectBackingType(type);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-2 p-2">
            {backingTypes.map((type, index) => (
                <button
                    key={index}
                    className={`px-5 py-2.5 mx-1 text-center border border-white rounded cursor-pointer transition duration-300 ease-in-out ${
                        selectedBackingType === type ? 'bg-purple-700 border-purple-700 text-white' : 'bg-transparent text-white hover:bg-purple-600'
                    }`}
                    onClick={() => handleSelectBackingType(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default BackingTypeSelector;

