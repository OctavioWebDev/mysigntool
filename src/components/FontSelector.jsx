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
        <div className="fontSelector">
            <div className="scrollContainer">
            {fonts.map((font, index) => (
                <div
                    key={index}
                    className={`fontBox ${selectedFont === font ? 'selected' : ''}`}
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
