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
import '../neonSignToolStyles.css';

function NeonSignBuilderTool() {
const [textInput, setTextInput] = useState('');
const [selectedFont, setSelectedFont] = useState('Arial');
const [selectedColor, setSelectedColor] = useState('#2196f3'); // Default color

const [size, setSize] = useState({ width: 0, height: 0 });
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

  console.log("Selected tube color: ", color);
};
const handlePresetSizeSelect = (size) => {
  setSize(size);
  setCustomSize({ width: 0, height: 0 });
};

const handleCustomSizeChange = (size) => {
  setSize(size);
};
const handleBackingTypeSelect = (type) => {

  console.log("Selected backing type: ", type);
};
const handleLocationSelect = (location) => {
  setLocation(location);
};

const handleResetCustomSize = () => {
  setCustomSize({ width: 0, height: 0 }); ///what this function is supposed to do is reset the sloder but it dosent
};

  return (
    <div className="neonSignBuilderTool">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Scotty B's LED's</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/express-yourself" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Express YourSelf
          </Link>
          <Link to="" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link to="/profile" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Profile
          </Link>
          <Link to="" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link to="/cart" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cart
          </Link>
        </nav>
      </header>
      <h1 className="absoulte left-5 text-white text-2xl">Express Your-Self</h1>
      <TextDisplay font={selectedFont} text={textInput} glowColor={selectedColor} />
      
      <h1 className="relative top-1 left-5 text-white text-2xl">Text Input</h1>
      <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
      
      <h1 className="relative top-1 left-5 text-white text-2xl">Font Selector</h1>
      <FontSelector onSelectFont={handleFontSelection} fonts={fonts} />
      
      <h1 className="relative top-1 left-5 text-white text-2xl">Color Selector</h1>
      <ColorSelector colors={colors} onSelectColor={handleColorSelect} />
      
      <h1 className="relative top-1 left-5 text-white text-2xl">Tube Color Matching</h1>
      <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} />
      
      <h1 className="relative top-1 left-5 text-white text-2xl">Size</h1>
      <PresetSizeSelector onSelectSize={handlePresetSizeSelect} onResetCustomSize={handleResetCustomSize} />
      
      <h2 className="relative top-1 left-5 text-white text-xl">Custom Size</h2>
      <CustomSizeSelector onSizeChange={handleCustomSizeChange} />
      
      <h1 className="relative top-0 left-5 text-white text-2xl">Backing Type</h1>
      <h3 className="relative top-0 left-5 text-white text-sm">Choose which type of backing</h3>
      <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect} />
      
      <h1 className="relative top-1 left-5 text-white text-2xl">Location</h1>
      <h3 className="relative top-0 left-5 text-white text-sm">Add 10% if location is 'outside'</h3>
      <LocationSelector onSelectLocation={handleLocationSelect} />
      
      <Footer size={size} location={location} />
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default NeonSignBuilderTool;

