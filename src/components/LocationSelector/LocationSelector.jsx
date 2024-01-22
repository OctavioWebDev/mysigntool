import React, { useState } from 'react';

const LocationSelector = ({ onSelectLocation }) => {
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
        if (onSelectLocation) {
            onSelectLocation(location);
        }
    };

    return (
        <div className="flex justify-center mb-5">
            <button
                className={`w-96 px-5 py-2.5 mx-1 text-center border border-white rounded cursor-pointer transition duration-300 ease-in-out ${
                    selectedLocation === 'inside' ? 'bg-purple-600 text-white' : 'bg-transparent text-white'
                }`}
                onClick={() => handleSelectLocation('inside')}
            >
                Inside
            </button>
            <button
                className={`w-96 px-5 py-2.5 mx-1 text-center border border-white rounded cursor-pointer transition duration-300 ease-in-out ${
                    selectedLocation === 'outside' ? 'bg-purple-600 text-white' : 'bg-transparent text-white'
                }`}
                onClick={() => handleSelectLocation('outside')}
            >
                Outside
            </button>
        </div>
    );
};

export default LocationSelector;

