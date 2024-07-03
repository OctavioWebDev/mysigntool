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
import Header from '../components/Header';

function LEDSignBuilderTool({ addToCart }) {
  const [textInput, setTextInput] = useState('');
  const [selectedFont, setSelectedFont] = useState('pacifico');
  const [selectedColor, setSelectedColor] = useState('#2196f3'); // Default color
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [tubeColor, setTubeColor] = useState('');
  const [backingType, setBackingType] = useState('acrylic');
  const [location, setLocation] = useState('inside'); // or 'outside'
  const [customSize, setCustomSize] = useState({ width: 0, height: 0 });

  const handleTextInputChange = (text) => {
    setTextInput(text);
  };

  const handleFontSelection = (fontClassName) => {
    setSelectedFont(fontClassName);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
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
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen">
        {/* TextDisplay */}
        <div className="lg:w-1/2 p-4">
          <TextDisplay
            font={selectedFont}
            text={textInput}
            glowColor={selectedColor}
            // More props and styling as required
          />
        </div>

        {/* Control panels container */}
        <div className="lg:w-1/2 p-4 overflow-y-auto">
          <div className="mt-20 mb-20 space-y-4">
            <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
            <FontSelector onSelectFont={handleFontSelection} />
            <ColorSelector onSelectColor={handleColorSelect} />
            <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} signColor={selectedColor} />
            <PresetSizeSelector onSelectSize={handlePresetSizeSelect} onResetCustomSize={handleResetCustomSize} />
            <CustomSizeSelector onSizeChange={handleCustomSizeChange} />
            <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect} />
            <LocationSelector onSelectLocation={handleLocationSelect} />
          </div>
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


