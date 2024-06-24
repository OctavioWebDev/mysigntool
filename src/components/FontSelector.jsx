import React, { useState } from 'react';

const FontSelector = ({ fonts, onSelectFont }) => {
    const [selectedFont, setSelectedFont] = useState('');
    const inputId = "textInput";

    const handleSelectFont = (font) => {
        setSelectedFont(font);
        if (onSelectFont) {
            onSelectFont(font);
        }
    };

    return (
        <div className="flex max-w-3xl mt-6 overflow-x-auto whitespace-wrap">
            <div className="ml-2 mx-2.5">
            <label htmlFor={inputId} className="block text-white text-lg mb-4">
                Your Font
            </label>
            <div className="flex flex-row">
                {fonts.map((font, index) => (
                    <div
                        key={index}
                        className={`px-4 py-2 mx-2 text-center cursor-pointer border border-white rounded transition duration-300 ease-in-out ${
                            selectedFont === font ? 'bg-purple-700 border-purple-700 text-white' : 'bg-transparent text-white hover:bg-purple-600'
                        }`}
                        style={{ fontFamily: font }}
                        onClick={() => handleSelectFont(font)}
                    >
                        {font}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default FontSelector;

