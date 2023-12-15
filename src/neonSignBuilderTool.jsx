import React, { useState } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import TextDisplay from './components/TextDisplay';
import FontSelector from './components/FontSelector';
import ColorSelector from './components/ColorSelector';
import TubeColorSelector from './components/TubeColorSelector';
import PresetSizeSelector from './components/PresetSizeSelector';
import CustomSizeSelector from './components/CustomSizeSelector';
import BackingTypeSelector from './components/BackingTypeSelector';
import LocationSelector from './components/LocationSelector';
import Footer from './components/Footer';
import './neonSignToolStyles.css';

function NeonSignBuilderTool() {
const [textInput, setTextInput] = useState('');
const [selectedFont, setSelectedFont] = useState('Arial');
const [selectedColor, setSelectedColor] = useState('#2196f3'); // Default color

const handleTextInputChange = (text) => setTextInput(text);
  const fonts = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New", /* more fonts */ ];

  const handleFontSelection = (font) => {
    setSelectedFont(font);
    console.log("Selected font: ", font);
  };
  
const colors = ["#FFD700","#ADD8E6", "#FF69B4", "#8F00FF", "#FFA500", "#FFC0CB", "#FF0000", "#FFFFFF", "#0D98BA", "#00008B", "#FAFA33", "#FFFDD0" /* more colors */];

const handleColorSelect = (color) => {
    setSelectedColor(color)
    console.log("Selected color: ", color);
};
const handleTubeColorSelect = (color) => {

  console.log("Selected tube color: ", color);
};
const handlePresetSizeSelect = (size) => {
  setSize(size);
  console.log("Selected preset size: ", size);
};

const handleCustomSizeChange = (size) => {
  setSize(size);
  console.log("Selected custom size: ", size);
};
const handleBackingTypeSelect = (type) => {

  console.log("Selected backing type: ", type);
};
const handleLocationSelect = (location) => {
  setLocation(location);
  console.log("Selected location: ", location);
};

const [size, setSize] = useState({ width: 0, height: 0 });
const [location, setLocation] = useState('inside'); // or 'outside'

  return (
    <div className="neonSignBuilderTool">
      <Header></Header>
      <h1 style={{ 
          position: 'relative', 
          top: "60px",   
          left: '20px',
          color: 'white' 
          }}>
        Express Your-Self
        </h1>
      <TextDisplay font={selectedFont} text={textInput} glowColor={selectedColor} />
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Text Input
        </h2>
      <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Font Selector
        </h2>
      <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
      <h2 style={{  
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Color Selector
        </h2>
      <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Tub Color Matching
        </h2>
      <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} />
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Size Selector
        </h2>
      <PresetSizeSelector onSelectSize={handlePresetSizeSelect}/>
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Custom Size
      </h2>
      <CustomSizeSelector onSizeChange={handleCustomSizeChange}/>
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Backing Type
        </h2>
      <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect}/>
      <h2 style={{ 
          position: 'relative', 
          top: "5px", 
          left: '20px',
          color: 'white' 
          }}>
        Location
        </h2>
      <LocationSelector onSelectLocation={handleLocationSelect}/>
      <Footer size={size} location={location} />
    </div>
  );
}

export default NeonSignBuilderTool;

