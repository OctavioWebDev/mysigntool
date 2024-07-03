import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
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
import { useGlobalState, useGlobalDispatch } from '../Context/GlobalState'; // Import global state and dispatch

function LEDSignBuilderTool({ addToCart }) {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  const signRef = useRef(null);

  const handleTextInputChange = (text) => {
    dispatch({ type: 'SET_TEXT_INPUT', payload: text });
  };

  const handleFontSelection = (fontClassName) => {
    dispatch({ type: 'SET_SELECTED_FONT', payload: fontClassName });
  };

  const handleColorSelect = (color) => {
    dispatch({ type: 'SET_SELECTED_COLOR', payload: color });
  };

  const handleTubeColorSelect = (color) => {
    dispatch({ type: 'SET_TUBE_COLOR', payload: color });
  };

  const handlePresetSizeSelect = (size) => {
    dispatch({ type: 'SET_SIZE', payload: size });
    dispatch({ type: 'SET_CUSTOM_SIZE', payload: { width: 0, height: 0 } });
  };

  const handleCustomSizeChange = (size) => {
    dispatch({ type: 'SET_SIZE', payload: size });
  };

  const handleBackingTypeSelect = (type) => {
    dispatch({ type: 'SET_BACKING_TYPE', payload: type });
  };

  const handleLocationSelect = (location) => {
    dispatch({ type: 'SET_LOCATION', payload: location });
  };

  const handleResetCustomSize = () => {
    dispatch({ type: 'SET_CUSTOM_SIZE', payload: { width: 0, height: 0 } });
  };

  const handleAddToCart = async () => {
    const canvas = await html2canvas(signRef.current);
    const image = canvas.toDataURL('image/png');

    const selections = {
      textInput: state.textInput,
      selectedFont: state.selectedFont,
      selectedColor: state.selectedColor,
      tubeColor: state.tubeColor,
      size: state.size,
      backingType: state.backingType,
      location: state.location,
      customSize: state.customSize,
      cost: calculateCost(),
      image,
    };
    addToCart(selections);
  };

  const calculateCost = () => {
    const totalSize = state.size.width * state.size.height;
    const pricePerSquareInch = 0.6;
    let cost = totalSize * pricePerSquareInch;
    if (state.location === 'outside') {
      cost += cost * 0.10;
    }
    return cost;
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen">
        {/* TextDisplay */}
        <div className="lg:w-1/2 p-4">
          <div ref={signRef}>
            <TextDisplay
              font={state.selectedFont}
              text={state.textInput}
              glowColor={state.selectedColor}
              // More props and styling as required
            />
          </div>
        </div>

        {/* Control panels container */}
        <div className="lg:w-1/2 p-4 overflow-y-auto">
          <div className="mt-20 mb-20 space-y-4">
            <TextInput placeholder="What say you!" onTextChange={handleTextInputChange} />
            <FontSelector onSelectFont={handleFontSelection} />
            <ColorSelector onSelectColor={handleColorSelect} />
            <TubeColorSelector onSelectTubeColor={handleTubeColorSelect} signColor={state.selectedColor} />
            <PresetSizeSelector onSelectSize={handlePresetSizeSelect} onResetCustomSize={handleResetCustomSize} />
            <CustomSizeSelector onSizeChange={handleCustomSizeChange} />
            <BackingTypeSelector onSelectBackingType={handleBackingTypeSelect} />
            <LocationSelector onSelectLocation={handleLocationSelect} />
          </div>
        </div>
      </div>
      <Footer
        textInput={state.textInput}
        selectedFont={state.selectedFont}
        selectedColor={state.selectedColor}
        tubeColor={state.tubeColor}
        size={state.size}
        location={state.location}
        customSize={state.customSize}
        backingType={state.backingType}
        addToCart={handleAddToCart}
      />
    </div>
  );
}

export default LEDSignBuilderTool;


