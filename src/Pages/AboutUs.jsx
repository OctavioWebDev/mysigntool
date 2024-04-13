import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';

import PhotoCarousel from '../components/PhotoCarousel';
import CustomerTestimonials from '../components/CustomerTestimonials';

function AboutUs() {
  return (
    <div className="flex flex-col main-h-screen">
      <Header />
      <div className="flex-1 container mx-auto px-4 mt-16 mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-700">About Us</h1>
        
        <section className="mb-8">
          <p className="max-w-[600px] md:text-xl dark:text-gray-400">
            Scotty B's LEDs, with nearly a decade of excellence, stands at the forefront of bespoke LED signage, catering to a diverse clientele including individuals, corporate entities, and special events. Our dedication to innovation has not only established us as pioneers in custom LED signs but also as specialists in cutting-edge digital signage solutions. From vibrant company logos to captivating indoor decor, our creations are designed to illuminate and inspire.
          </p>
        </section>
        
        <section className="photo-carousel mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-700">Our Creations</h2>
          <PhotoCarousel />
        </section>
        
        <section className="customer-testimonials mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-700">What Our Customers Say</h2>
          <CustomerTestimonials />
        </section>
        
        <section className="location-contact mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-700">Visit or Contact Us</h2>
          <p className="max-w-[600px] md:text-xl dark:text-gray-400">Discover the brilliance of Scotty B's LEDs firsthand. Our workshop and showroom are nestled in the heart of innovation, where every sign is a story waiting to be told. Reach out to us, schedule a visit, or let us answer any inquiries you might have:</p>
          <ul className="mt-4">
            <li><strong>Address:</strong> 4455 Secor Road Toledo, Ohio</li>
            <li><strong>Email:</strong> <a href="mailto:info@scottybleds.com">info@scottybleds.com</a></li>
            <li><strong>Phone:</strong> (419)481-3567</li>
          </ul>
        </section>
      </div>
      <MainFooter />
    </div>
  );
}

export default AboutUs;
