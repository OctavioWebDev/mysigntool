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
        <div className="locationSelector">
            <button
                className={`locationButton ${selectedLocation === 'inside' ? 'selected' : ''}`}
                onClick={() => handleSelectLocation('inside')}
            >
                Inside
            </button>
            <button
                className={`locationButton ${selectedLocation === 'outside' ? 'selected' : ''}`}
                onClick={() => handleSelectLocation('outside')}
            >
                Outside
            </button>
        </div>
    );
};

export default LocationSelector;
