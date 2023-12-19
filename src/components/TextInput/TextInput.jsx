import React, { useState } from 'react';
import './TextInput.css';

const TextInput = ({ placeholder, onTextChange }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        if (onTextChange) {
            onTextChange(e.target.value);
        }
    };

    return (
        <input 
            type="text" 
            value={text} 
            onChange={handleChange} 
            placeholder={placeholder}
            className="textInput" 
        />
    );
};

export default TextInput;
