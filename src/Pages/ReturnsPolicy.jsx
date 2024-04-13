import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';


const ReturnsPolicy = () => (
  <div className="flex flex-col min-h-screen">
    <Header/>
  <div className="space-y-4 mt-16 text-sm max-w-4xl mx-auto px-4">
   
    <h2 className="text-lg font-bold text-center">Returns Policy</h2>
    
    <h3 className="font-semibold text-center">Definitions</h3>
    <ul className="pl-5 text-center">
      <li><strong>Seller:</strong> Refers to Scotty B's LED's (SBLED(s)) and its successors and assigns.</li>
      <li><strong>Buyer:</strong> The purchaser or any person acting on behalf of and with the authority of the purchaser.</li>
      <li><strong>Goods:</strong> Any products supplied by the Seller to the Buyer.</li>
      <li><strong>Services:</strong> All services provided by the Seller to the Buyer, including advice or recommendations.</li>
      <li><strong>Price:</strong> The cost of the Goods as agreed between the Seller and the Buyer.</li>
    </ul>

    <h3 className="font-semibold text-center">Refunds, Defects, and Return Policies</h3>
    
    <p className='text-center'><strong>LED Sign:</strong> Custom Order Products are final sale, with no refunds 
    or returns accepted. Damage upon arrival must be reported within 24 hours, including photographic or video evidence. 
    Variations in color or slight discolourations, due to their handmade nature or digital display differences, are not considered defects.</p>

    <h3 className="font-semibold text-center">Process for LED Sign Returns</h3>
    <p className='text-center'>Non-custom LED Sign installations from our product line can be returned within 14 days of receipt, provided 
    they are unopened and undamaged. Please email us at support@sbleds.com to initiate a return. Upon return inspection, a full refund will be processed. 
    Feedback on the reason for your return is greatly appreciated to help us improve our products and service.</p>
    
    <p className='font-semibold text-center'>Regrettably, we cannot offer refunds on custom products and limited edition installations. Should you encounter 
    technical issues with any of our products, please contact our customer service team for assistance.</p>
    </div>
    <MainFooter/>
  </div>
);

export default ReturnsPolicy;
