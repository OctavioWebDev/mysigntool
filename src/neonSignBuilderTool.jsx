import React from 'react';
import TextInput from './components/TextInput';
import FontSelector from './components/FontSelector';
import ColorSelector from './components/ColorSelector';
import TubeColorSelector from './components/TubeColorSelector';
import PresetSizeSelector from './components/PresetSizeSelector';
import CustomSizeSelector from './components/CustomSizeSelector';
import BackingTypeSelector from './components/BackingTypeSelector';
import LocationSelector from './components/LocationSelector';
import './neonSignToolStyles.css';

function NeonSignBuilderTool() {
  const handleTextChange = (text) => {
    console.log("Text changed to: ", text);
};
  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New", /* more fonts */ ];

  const handleFontSelect = (font) => {
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
      <TextInput placeholder="Enter your text here" onTextChange={handleTextChange} />
      <FontSelector fonts={fonts} onSelectFont={handleFontSelect} />
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
