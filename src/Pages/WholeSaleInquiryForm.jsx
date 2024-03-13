import React from 'react';
import Header from '../components/Header';
const WholesaleInquiryForm = () => {
  // Add your form submission logic here
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
  };

  return (
    <div className="container mx-auto p-4">
        <Header />
      <h2 className="text-2xl font-bold mb-4">WHOLESALE INQUIRIES</h2>
      <p className="mb-4">We offer our LED signs to shops looking to resell. Please fill out this form to become a reseller and we will be in touch.</p>
      <p className="mb-4">For interior designers, architects, and event planners, you can join our trade program to get exclusive benefits and discounts.</p>
      <p className="mb-4 font-semibold">We look forward to working with you!</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="companyName" placeholder="Company name*" className="border-2 p-2 rounded-md" required />
          <input type="text" name="firstName" placeholder="First name*" className="border-2 p-2 rounded-md" required />
          <input type="text" name="lastName" placeholder="Last name" className="border-2 p-2 rounded-md" />
          <input type="email" name="email" placeholder="Email*" className="border-2 p-2 rounded-md" required />
          <input type="tel" name="phone" placeholder="Phone number" className="border-2 p-2 rounded-md" />
          <div className="col-span-1 md:col-span-2">
            <select name="typeOfStore" className="border-2 p-2 rounded-md w-full">
              <option value="">Please Select</option>
              <option value="retail">Retail</option>
              <option value="online">Online</option>
              <option value="other">Other</option>
            </select>
          </div>
          <input type="text" name="state" placeholder="State" className="border-2 p-2 rounded-md" />
          <input type="text" name="country" placeholder="Country" className="border-2 p-2 rounded-md" />
          <input type="url" name="website" placeholder="Website URL" className="border-2 p-2 rounded-md" />
        </div>

        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default WholesaleInquiryForm;
