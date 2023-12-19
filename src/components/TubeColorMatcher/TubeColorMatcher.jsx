import React, { useState } from 'react';
import './TubeColorMatcher.css'

const TubeColorMatcher = ({ onSelectTubeColor }) => {
    const [selectedTubeColor, setSelectedTubeColor] = useState('');

    const handleSelectTubeColor = (color) => {
        setSelectedTubeColor(color);
        if (onSelectTubeColor) {
            onSelectTubeColor(color);
        }
    };

    return (
        <div className="tubeColorSelector">
            <button
                className={`tubeColorButton ${selectedTubeColor === 'white' ? 'selected' : ''}`}
                onClick={() => handleSelectTubeColor('white')}
            >
                White Tube
            </button>
            <button
                className={`tubeColorButton ${selectedTubeColor === 'colorMatching' ? 'selected' : ''}`}
                onClick={() => handleSelectTubeColor('colorMatching')}
            >
                Color Matching
            </button>
        </div>
    );
};

export default TubeColorMatcher;
