import React, { useState } from 'react';

const FontSelector = ({ fonts, onSelectFont }) => {
    const [selectedFont, setSelectedFont] = useState('');

    const handleSelectFont = (font) => {
        setSelectedFont(font);
        if (onSelectFont) {
            onSelectFont(font);
        }
    };

    return (
        <div className="overflow-x-auto whitespace-wrap">
            <div className="flex flex-row">
                {fonts.map((font, index) => (
                    <div
                        key={index}
                        className={`px-5 py-2.5 mx-1 text-center cursor-pointer border border-white rounded transition duration-300 ease-in-out ${
                            selectedFont === font ? 'bg-purple-600' : 'bg-transparent'
                        }`}
                        style={{ fontFamily: font }}
                        onClick={() => handleSelectFont(font)}
                    >
                        {font}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FontSelector;

