import React, { useState } from 'react';
import TextInput from './components/TextInput';
import TextDisplay from './components/TextDisplay';
import FontSelector from './components/FontSelector';
import ColorSelector from './components/ColorSelector';
import TubeColorSelector from './components/TubeColorSelector';
import PresetSizeSelector from './components/PresetSizeSelector';
import CustomSizeSelector from './components/CustomSizeSelector';
import BackingTypeSelector from './components/BackingTypeSelector';
import LocationSelector from './components/LocationSelector';
import './neonSignToolStyles.css';

function NeonSignBuilderTool() {
const [textInput, setTextInput] = useState('');
const [selectedFont, setSelectedFont] = useState('Arial');

const handleTextInputChange = (text) => setTextInput(text);
  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New", /* more fonts */ ];

  const handleFontSelection = (font) => {
    setSelectedFont(font);
    console.log("Selected font: ", font);
  };
  
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", /* more colors */];

const handleColorSelect = (color) => {
    console.log("Selected color: ", color);
};
const handleTubeColorSelect = (color) => {
  console.log("Selected tube color: ", color);
};
const handlePresetSizeSelect = (size) => {
  console.log("Selected preset size: ", size);
};

const handleCustomSizeChange = (size) => {
  console.log("Selected custom size: ", size);
};
const handleBackingTypeSelect = (type) => {
  console.log("Selected backing type: ", type);
};
const handleLocationSelect = (location) => {
  console.log("Selected location: ", location);
};

  return (
    <div className="neonSignBuilderTool">
      <h1>Build Your Neon Sign</h1>
      <TextDisplay font={selectedFont} text={textInput} />
      <h2>Text Input</h2>
      <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
      <h2>Font Selector</h2>
      <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
      <h2>Color Selector</h2>
      <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
      <h2>Tub Color Matching</h2>
      <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} />
      <h2>Size Selecto</h2>
      <PresetSizeSelector onSelectSize={handlePresetSizeSelect}/>
      <h2>Custom Size</h2>
      <CustomSizeSelector onSizeChange={handleCustomSizeChange}/>
      <h2>Backing Type</h2>
      <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect}/>
      <h2>Locatiion</h2>
      <LocationSelector onSelectLocation={handleLocationSelect}/>
    </div>
  );
}

export default NeonSignBuilderTool;

