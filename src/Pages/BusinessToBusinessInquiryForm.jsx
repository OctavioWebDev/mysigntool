// import React from 'react';
// import Header from '../components/Header';
// import MainFooter from '../components/MainFooter';

// const BusinessToBusinessInquiryForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You'll want to handle the form submission here
//   };

//   return (
//     <div className="container mx-auto p-4">
//         <Header />
//       <h2 className="text-2xl font-bold mb-4">Business to Business Inquiry</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-4">
//           <input type="email" name="email" placeholder="Work email address*" className="border-2 p-2 rounded-md w-full" required />
          
//           <div className="flex gap-4">
//             <select name="countryCode" className="border-2 p-2 rounded-md w-1/3">
//               <option value="+1">+1</option>
//               {/* Add other country codes here */}
//             </select>
//             <input type="tel" name="telephone" placeholder="Telephone" className="border-2 p-2 rounded-md w-2/3" />
//           </div>

//           <select name="country" className="border-2 p-2 rounded-md w-full" required>
//             <option value="">Select</option>
//             {/* Populate with countries */}
//           </select>

//           <input type="text" name="state" placeholder="Country State" className="border-2 p-2 rounded-md w-full" />
//           <input type="text" name="companyName" placeholder="Company legal name*" className="border-2 p-2 rounded-md w-full" required />
//           <input type="url" name="website" placeholder="Company website" className="border-2 p-2 rounded-md w-full" />
          
//           <select name="lineOfBusiness" className="border-2 p-2 rounded-md w-full" required>
//             <option value="">Select</option>
//             {/* Options for line of business */}
//           </select>

//           <select name="numberOfEmployees" className="border-2 p-2 rounded-md w-full" required>
//             <option value="">Select</option>
//             {/* Options for number of employees */}
//           </select>

//           <select name="findUs" className="border-2 p-2 rounded-md w-full">
//             <option value="">How did you find us?</option>
//             {/* Options for how they found the business */}
//           </select>
//         </div>

//         <div className="flex gap-4 items-center">
//           <input type="checkbox" name="emailOptIn" id="emailOptIn" />
//           <label htmlFor="emailOptIn" className="text-sm">
//             By submitting this form, you agree on receiving our emails. You can opt out at any time.
//           </label>
//         </div>

//         <div className="flex gap-4 items-center">
//           <input type="checkbox" name="smsMarketing" id="smsMarketing" />
//           <label htmlFor="smsMarketing" className="text-sm">
//             I'd like to receive SMS marketing
//           </label>
//         </div>

//         <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 w-full">
//           SUBMIT
//         </button>
//       </form>
//       <MainFooter />
//     </div>
//   );
// };

// export default BusinessToBusinessInquiryForm;

