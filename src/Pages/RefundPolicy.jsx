import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';

const RefundPolicy = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
  <div className="space-y-4 text-sm max-w-4xl mx-auto px-4">
    <h2 className="text-lg font-bold text-center">Refund Policy</h2>
    
    <p className="text-center">At Scotty B's LED's (SBLED(s)), we take pride in the quality and craftsmanship of our products. Our refund policy outlines conditions under which refunds may or may not be granted.</p>
    
    <h3 className="font-semibold text-center">Custom Order Products</h3>
    <p className="text-center">Due to the custom nature of many of our products, we are unable to offer refunds or accept returns for Custom Order Products once an order is placed. Buyers have a window of 4 hours post-purchase to request modifications to custom orders.</p>
    
    <h3 className="font-semibold text-center">Damaged Goods</h3>
    <p className="text-center">If Goods arrive damaged, the Buyer is required to notify both the delivery agent and SBLED(s) within 24 hours of receipt, providing written evidence of the damage (photographs or video). Failure to report within this timeframe may result in the forfeiture of any claim for said damage.</p>
    
    <h3 className="font-semibold text-center">Product Variations</h3>
    <p className="text-center">Given the handcrafted nature of our products, slight variations and discolourations may occur. These are not considered faults. Variations in colour due to screen and printer calibration are also acknowledged by the Buyer as part of the product's unique characteristics.</p>
    
    <h3 className="font-semibold text-center">Inspection and Reporting</h3>
    <p className="text-center">Upon delivery, the Buyer should inspect the Goods and report any defects, damage, or discrepancies within 48 hours. Failure to do so will be deemed as acceptance of the Goods as is, meeting all standards of quality and specification.</p>
    
    <p className="text-center">Custom products and limited edition installations are considered final sale and are not eligible for refunds. We are committed to resolving technical issues efficiently - please reach out to our customer service team for assistance.</p>
    
    <p className="font-semibold text-center">For further inquiries or assistance, our customer service team can be contacted at support@sbleds.com.</p>
    </div>
    <MainFooter />
  </div>
);

export default RefundPolicy;
