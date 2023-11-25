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
      <TextDisplay font={selectedFont} text={textInput} />
      <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
      <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
      <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
      <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} />
      <PresetSizeSelector onSelectSize={handlePresetSizeSelect}/>
      <CustomSizeSelector onSizeChange={handleCustomSizeChange}/>
      <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect}/>
      <LocationSelector onSelectLocation={handleLocationSelect}/>
    </div>
  );
}

export default NeonSignBuilderTool;

