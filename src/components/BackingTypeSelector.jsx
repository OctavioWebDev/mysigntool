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
        <div className="backingTypeSelector">
            {backingTypes.map((type, index) => (
                <button
                    key={index}
                    className={`backingTypeButton ${selectedBackingType === type ? 'selected' : ''}`}
                    onClick={() => handleSelectBackingType(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default BackingTypeSelector;
