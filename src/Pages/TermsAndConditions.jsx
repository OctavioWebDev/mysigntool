import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';

const TermsAndConditions = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="space-y-4 text-sm max-w-4xl">
                <h2 className="text-lg font-bold text-center">Terms & Conditions</h2>
                <p className='text-center'>Welcome to Scotty B's LED's (also referred to as "SBLED(s)").
                    By using our website (https://sbleds.com) and purchasing our products, you agree to the
                    following terms and conditions (the "Terms").</p>

                <h3 className="font-semibold text-center">Use of Our Website</h3>
                <p className='text-center'>Our website is available for your personal use.
                    By accessing it, you agree not to misuse the content or services offered. The information
                    provided is for general guidance and purchasing our LED products.</p>

                <h3 className="font-semibold text-center">Purchases and Payments</h3>
                <p className='text-center'>When you buy a product from SBLED(s), you're entering into a
                    contract with us. Make sure you provide accurate payment details. We reserve the right to refuse
                    or cancel orders at our discretion.</p>

                <h3 className="font-semibold text-center">Product Descriptions and Availability</h3>
                <p className='text-center'>We strive to ensure that product descriptions are accurate. However, we
                    do not warrant that all details are error-free. Product availability may vary, and we reserve the right to
                    limit quantities.</p>

                <h3 className="font-semibold text-center">Shipping and Delivery</h3>
                <p className='text-center'>SBLED(s) will dispatch your products as per the shipping options selected
                    at checkout. Delivery times are estimates and subject to change based on availability and carrier conditions.</p>

                <h3 className="font-semibold text-center">Returns and Refunds</h3>
                <p className='text-center'>Eligible products can be returned within 14 days of delivery for a
                    refund or exchange. Customized items are considered final sale and are not eligible for return unless defective.</p>

                <h3 className="font-semibold text-center">Privacy Policy</h3>
                <p className='text-center'>Your privacy is important to us. Please review our Privacy Policy to understand
                    how we collect and use your information.</p>

                <h3 className="font-semibold text-center">Modifications to Terms</h3>
                <p className='text-center'>SBLED(s) reserves the right to modify these Terms at any time. We will post any changes
                    online and, where feasible, notify you directly.</p>

                <h3 className="font-semibold text-center">Governing Law and Dispute Resolution</h3>
                <p className='text-center'>These Terms are governed by the laws of the state in which our company is registered.
                    Disputes arising under these Terms will be resolved through binding arbitration, with no option for class action lawsuits.</p>

                <p className='font-semibold text-center'>If you have any questions or concerns regarding these Terms, please contact
                    us at support@sbleds.com.</p>
            </div>
        </div>
        <MainFooter />
    </div>
);

export default TermsAndConditions;