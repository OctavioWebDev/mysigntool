import React, { useState } from 'react';
import FontSelector from './FontSelector/FontSelector';
import ColorSelector from './ColorSelector/ColorSelector';
import TextDisplay from './TextDisplay/TextDisplay';
import TextInput from './TextInput/TextInput';
import TubeColorMatcher from './TubeColorMatcher/TubeColorMatcher';
function TextStyle() {
    const [text, setTextInput] = useState('');
    const [font, setFont] = useState('Arial');
    const [selectedColor, setColor] = useState('#2196f3');
    const [tubeColor, setTubeColor] = useState('red');

    const handleTextChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleFontChange = (newFont) => {
        setFont(newFont);
    }

    const colors = ["#FFD700", "#ADD8E6", "#FF69B4", "#8F00FF", "#FFA500", "#FFC0CB", "#FF0000", "#FFFFFF", "#0D98BA", "#00008B", "#FAFA33", "#FFFDD0" /* more colors */];
    const handleColorChange = (newColor) => {
        setColor(newColor);
    }

    const handleTubeColorChange = (newTubeColor) => {
        setTubeColor(newTubeColor);
    }

    return (
        <div>
            <h1 className="absoulte ml-2 mt-6 mb-6 text-white text-2xl">Express Your-Self</h1>
            <TextDisplay text={text} font={font} color={selectedColor} />
            <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Text Input</h1>
            <TextInput value={text} onChange={handleTextChange} />
            <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Font Selector</h1>
            <FontSelector selected={font} onChange={handleFontChange} />
            <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Color Selector</h1>
            <ColorSelector selected={selectedColor} onChange={handleColorChange} />
            <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Tube Color Matching</h1>
            <TubeColorMatcher selected={tubeColor} onChange={handleTubeColorChange} />
        </div>
    )
}

export default TextStyle;