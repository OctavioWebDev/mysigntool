import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput/TextInput';
import TextDisplay from '../components/TextDisplay/TextDisplay';
import FontSelector from '../components/FontSelector/FontSelector';
import ColorSelector from '../components/ColorSelector/ColorSelector';
import TubeColorSelector from '../components/TubeColorMatcher/TubeColorMatcher';
import PresetSizeSelector from '../components/PresetSizeSelector/PresetSizeSelector';
import CustomSizeSelector from '../components/CustomSizeSelector/CustomSizeSelector';
import BackingTypeSelector from '../components/BackingTypeSelector/BackingTypeSelector';
import LocationSelector from '../components/LocationSelector/LocationSelector';
import Footer from '../components/Footer/Footer';
import '../LEDSignToolStyles.css';
import Header from '../components/Header/Header';

function LEDSignBuilderTool ({addToCart}) {
const [textInput, setTextInput] = useState('');
const [selectedFont, setSelectedFont] = useState('Arial');
const [selectedColor, setSelectedColor] = useState('#2196f3'); // Default color
const [size, setSize] = useState({ width: 0, height: 0 });
const [tubeColor, setTubeColor] = useState('');
const [backingType, setBackingType] = useState('acrylic');
const [location, setLocation] = useState('inside'); // or 'outside'
const [customSize, setCustomSize] = useState({ width: 0, height: 0 });


const handleTextInputChange = (text) => setTextInput(text);
  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New", /* more fonts */ ];

  const handleFontSelection = (font) => {
    setSelectedFont(font);
  };
  
const colors = ["#FFD700","#ADD8E6", "#FF69B4", "#8F00FF", "#FFA500", "#FFC0CB", "#FF0000", "#FFFFFF", "#0D98BA", "#00008B", "#FAFA33", "#FFFDD0" /* more colors */];

const handleColorSelect = (color) => {
    setSelectedColor(color)
};


const handleTubeColorSelect = (color) => {
  setTubeColor(color);
};

const handlePresetSizeSelect = (size) => {
  setSize(size);
  setCustomSize({ width: 0, height: 0 });
};

const handleCustomSizeChange = (size) => {
  setSize(size);
};

const handleBackingTypeSelect = (type) => {
  setBackingType(type);
};

const handleLocationSelect = (location) => {
  setLocation(location);
};

const handleResetCustomSize = () => {
  setCustomSize({ width: 0, height: 0 });

};

  return (
    <div className="LEDSignBuilderTool">
      <Header />
      <h1 className="absoulte ml-2 mt-6 mb-6 text-white text-2xl">Express Your-Self</h1>
      <TextDisplay font={selectedFont} text={textInput} glowColor={selectedColor} />
      
      <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Text Input</h1>
      <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
      
      <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Font Selector</h1>
      <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
      
      <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Color Selector</h1>
      <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
      
      <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Tube Color Matching</h1>
      <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} signColor={selectedColor} />
      
      <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Size</h1>
      <PresetSizeSelector onSelectSize={handlePresetSizeSelect} onResetCustomSize={handleResetCustomSize} />
      
      <h2 className="relative top-1 left-5 mt-6 mb-6 text-white text-xl">Custom Size</h2>
      <CustomSizeSelector onSizeChange={handleCustomSizeChange} />
      
      <h1 className="relative top-0 left-5 mt-6 mb-6 text-white text-2xl">Backing Type</h1>
      <h3 className="relative top-0 left-5 mt-6 mb-6 text-white text-sm">Choose which type of backing</h3>
      <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect} />
      
      <h1 className="relative top-1 left-5 mt-6 mb-6 text-white text-2xl">Location</h1>
      <h3 className="relative top-0 left-5 mt-6 mb-6 text-white text-sm">Add 10% if location is 'outside'</h3>
      <LocationSelector onSelectLocation={handleLocationSelect}/>
      
      <Footer 
        textInput={textInput}
        selectedFont={selectedFont}
        selectedColor={selectedColor}
        tubeColor={tubeColor}
        size={size}
        location={location}
        customSize={customSize}
        backingType={backingType}
        addToCart={addToCart} // Pass this prop to the Footer
      />
    </div>
  );
}

export default LEDSignBuilderTool;

