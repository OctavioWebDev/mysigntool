import React, { useState } from 'react';

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
            className="inline-block p-3.5 mx-2.5 h-20 w-full max-w-4.5xl border border-white border-solid  rounded text-base bg-transparent text-white"
        />
    );
};

export default TextInput;

