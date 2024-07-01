import React, { useState } from 'react';

const fontAliases = [
  { alias: 'Pacifico', className: 'pacifico' },
  { alias: 'Satisfy', className: 'satisfy' },
  { alias: 'Sacramento', className: 'sacramento' },
  { alias: 'Allura', className: 'allura' },
  { alias: 'Yellowtail', className: 'yellowtail' },
  { alias: 'Tangerine', className: 'tangerine' },
  { alias: 'Cookie', className: 'cookie' },
  { alias: 'Parisienne', className: 'parisienne' }
];

const FontSelector = ({ onSelectFont }) => {
    const [selectedFont, setSelectedFont] = useState('');

    const handleSelectFont = (fontAlias) => {
        setSelectedFont(fontAlias);
        if (onSelectFont) {
            onSelectFont(fontAlias.className);
        }
    };

    return (
        <div className="flex max-w-3xl mt-6 overflow-x-auto whitespace-wrap">
            <div className="ml-2 mx-2.5">
                <label className="block text-white text-lg mb-4">
                    Your Font
                </label>
                <div className="flex flex-row">
                    {fontAliases.map((font, index) => (
                        <div
                            key={index}
                            className={`px-4 py-2 mx-2 text-center cursor-pointer border border-white rounded transition duration-300 ease-in-out ${
                                selectedFont === font.className ? 'bg-purple-700 border-purple-700 text-white' : 'bg-transparent text-white hover:bg-purple-600'
                            }`}
                            style={{ fontFamily: font.alias }}
                            onClick={() => handleSelectFont(font)}
                        >
                            {font.alias}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FontSelector;


