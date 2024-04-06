import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import TextDisplay from '../components/TextDisplay';
import FontSelector from '../components/FontSelector';
import ColorSelector from '../components/ColorSelector';
import TubeColorSelector from '../components/TubeColorMatcher';
import PresetSizeSelector from '../components/PresetSizeSelector';
import CustomSizeSelector from '../components/CustomSizeSelector';
import BackingTypeSelector from '../components/BackingTypeSelector';
import LocationSelector from '../components/LocationSelector';
import Footer from '../components/Footer';
import '../LEDSignToolStyles.css';
import Header from '../components/Header';

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
      {/* Flex container for the TextDisplay and control panels */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
      <div className="w-full lg:w-auto flex-shrink lg:flex-shrink-0 fixed top-[height-of-header] left-0 right-0 lg:static">
        <TextDisplay 
          font={selectedFont} 
          text={textInput} 
          glowColor={selectedColor}
          // More props and styling as required
        />
      </div>
        
        {/* Control panels container */}
        <div className="mt-[calc(height-of-header+height-of-text-display)] lg:mt-12 w-full lg:w-auto lg:mr-6 overflow-auto overscroll-none lg:h-[calc(100vh-height-of-header)]">
          <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
          <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
          <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
          <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} signColor={selectedColor} />
          <PresetSizeSelector onSelectSize={handlePresetSizeSelect} onResetCustomSize={handleResetCustomSize} />
          <CustomSizeSelector onSizeChange={handleCustomSizeChange} />
          <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect} />
          <LocationSelector onSelectLocation={handleLocationSelect} />
        </div>
      </div>

      <Footer 
        textInput={textInput}
        selectedFont={selectedFont}
        selectedColor={selectedColor}
        tubeColor={tubeColor}
        size={size}
        location={location}
        customSize={customSize}
        backingType={backingType}
        addToCart={addToCart}
      />
    </div>
  );
}

export default LEDSignBuilderTool;

