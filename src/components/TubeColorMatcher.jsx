import React, { useState } from 'react';

const TubeColorMatcher = ({ onSelectTubeColor, signColor }) => {
    const [selectedTubeColor, setSelectedTubeColor] = useState('white');
    const inputId = "textInput";

    const handleSelectTubeColor = (color) => {
        // If "match" is selected, use the signColor, otherwise use the selected color directly
        const tubeColor = color === 'colorMatching' ? signColor : 'white';
        setSelectedTubeColor(tubeColor); // This line updates the local state to reflect the selected tube color accurately
        
        // Pass the choice back to the parent component
        onSelectTubeColor(tubeColor);
    };

    return (
        <div className="mt-6 ml-2 mx-2.5">
            <label htmlFor={inputId} className="block text-white text-lg mb-4">
                Your Tube Color
            </label>
        <div className="flex max-w-3xl justify-center overflow-x-auto whitespace-wrap">
            <button
                className={`w-80 px-5 py-2 mx-2 text-center border border-white rounded cursor-pointer transition duration-300 ease-in-out ${
                    selectedTubeColor === 'white' ? 'bg-purple-700 border-purple-700 text-white' : 'bg-transparent text-white hover:bg-purple-600'
                } w-92`}
                onClick={() => handleSelectTubeColor('white')}
            >
                White Tube
            </button>
            <button
                className={`w-80 px-5 py-2 mx-4 text-center border border-white rounded cursor-pointer transition duration-300 ease-in-out ${
                    selectedTubeColor === signColor ? 'bg-purple-700 border-purple-700 text-white' : 'bg-transparent text-white hover:bg-purple-600'
                } w-92`}
                onClick={() => handleSelectTubeColor('colorMatching')}
            >
                Color Matching
            </button>
        </div>
        </div>
    );
};

export default TubeColorMatcher;


