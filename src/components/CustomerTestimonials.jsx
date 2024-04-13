import React, { useState } from 'react';

// Dummy testimonials array, replace with your actual testimonials
const testimonials = [
  {
    quote: "Scotty B's LEDs transformed our event space with incredible custom lighting. Their attention to detail and creative designs made all the difference.",
    author: "Alex Johnson"
  },
  {
    quote: "We ordered a custom sign for our cafe, and the result was stunning. Scotty B's LEDs not only delivered high-quality work but also excellent customer service.",
    author: "Samantha Bloom"
  },
  {
    quote: "The digital signs from Scotty B's LEDs have been game-changers for our retail business. The quality is unmatched, and they really know how to make a business shine.",
    author: "Michael Reyes"
  },
  // Add more testimonials as needed
];

const CustomerTestimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-carousel relative w-full">
      <div className="testimonial-item text-center px-4 py-8">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className={`text-xl italic font-semibold text-gray-900 dark:text-white transition-opacity duration-700 ease-in-out ${index === currentTestimonialIndex ? 'opacity-100' : 'opacity-0 absolute'} `}>
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p>{testimonial.quote}</p>
            <footer className="blockquote-footer">{testimonial.author}</footer>
          </blockquote>
        ))}
        <button
        type="button"
        className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevTestimonial}
      >
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextTestimonial}
      >
      </button>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
