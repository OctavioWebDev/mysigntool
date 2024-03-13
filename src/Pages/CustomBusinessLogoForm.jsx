import React, { useState } from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
const CustomBusinessLogoForm = () => {
  // You can manage form state using useState hook
  const [formState, setFormState] = useState({
    // Add your form fields here
  });

  // Example of handling form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formState);
  };

  // Example of handling file upload
  const handleFileUpload = (event) => {
    // Handle file upload here
    const file = event.target.files[0];
    console.log(file);
    // Update form state accordingly
  };

  // Example of handling form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4">
        <Header />
      <h2 className="text-2xl font-bold mb-4">GET A FREE QUOTE</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex gap-4">
            <button type="button" className="border-2 px-4 py-2 rounded-md">Individual</button>
            <button type="button" className="border-2 px-4 py-2 rounded-md">Business</button>
          </div>
          <input type="file" name="design" onChange={handleFileUpload} className="border-2 p-2 rounded-md w-full" required />
          <textarea name="projectDescription" onChange={handleChange} placeholder="Describe your project*" className="border-2 p-2 rounded-md w-full" required></textarea>
          <div className="grid grid-cols-2 gap-4">
            <select name="size" onChange={handleChange} className="border-2 p-2 rounded-md w-full" required>
              <option value="">Select</option>
              {/* Options for size */}
            </select>
            <select name="quantity" onChange={handleChange} className="border-2 p-2 rounded-md w-full" required>
              <option value="">Select</option>
              {/* Options for quantity */}
            </select>
          </div>
          <select name="deadline" onChange={handleChange} className="border-2 p-2 rounded-md w-full" required>
            <option value="">When do you need it?*</option>
            {/* Options for deadline */}
          </select>
          <select name="referral" onChange={handleChange} className="border-2 p-2 rounded-md w-full">
            <option value="">How did you hear about us?</option>
            {/* Options for referral */}
          </select>
        </div>

        <div className="space-y-4">
          <input type="text" name="firstName" onChange={handleChange} placeholder="First Name*" className="border-2 p-2 rounded-md w-full" required />
          <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name*" className="border-2 p-2 rounded-md w-full" required />
          <input type="email" name="email" onChange={handleChange} placeholder="Email*" className="border-2 p-2 rounded-md w-full" required />
          <div className="flex gap-4">
            <select name="countryCode" onChange={handleChange} className="border-2 p-2 rounded-md w-1/3" required>
              <option value="+1">+1</option>
              {/* Add other country codes here */}
            </select>
            <input type="tel" name="phone" onChange={handleChange} placeholder="Phone*" className="border-2 p-2 rounded-md w-2/3" required />
          </div>
          <select name="country" onChange={handleChange} className="border-2 p-2 rounded-md w-full" required>
            <option value="">Select Country*</option>
            {/* Options for countries */}
          </select>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="promotions" id="promotions" />
            <label htmlFor="promotions" className="text-sm">
              I'd like to receive exclusive promotions, discounts and news.
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="smsNotifications" id="smsNotifications" />
            <label htmlFor="smsNotifications" className="text-sm">
              I would like to be notified by SMS when my quote is ready.
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="termsAndConditions" id="termsAndConditions" required />
            <label htmlFor="termsAndConditions" className="text-sm">
              I agree with the Terms and Conditions and Privacy Policy*
            </label>
          </div>
        </div>

        <button type="submit" className="col-span-2 bg-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 w-full">
          GET A FREE QUOTE
        </button>
      </form>
      <MainFooter />
    </div>
  );
};

export default CustomBusinessLogoForm;
