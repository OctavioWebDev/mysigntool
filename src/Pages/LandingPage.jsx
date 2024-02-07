import React from 'react';
import { Link } from 'react-router-dom';
import promoVideo from '../assets/Videos/Scotty B\'s LED\'s Promo.mp4';
import uncleJohns from '../assets/ScottyBsLEDpics/245398213_1300694530390420_8635895171047700084_n.jpeg';
import digiSign1 from '../assets/ScottyBsLEDpics/digisign1design.png'
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';

const LandingPage = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center" href="#">
          <SBLEDSLogo to="/" className="h-10 w-10" />
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <video
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              width="550"
              controls
            >
              <source src={promoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome Scotty B's LEDs, where your brightest ideas shine in LED!
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  At Scotty B's LEDs, we're passionate about lighting up your world with custom,
          high-quality LED signs. With over two decades of expertise in the field, 
          our commitment is to turn your vision into a luminous reality. Perfect for 
          businesses, special events, or personal home decor, our LED signs are crafted 
          to add a unique glow to any space.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md 
                    bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors 
                    hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 
                    disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                     dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border
                           border-gray-200 bg-white px-8 text-sm font-medium shadow-sm text-gray-900  // Ensure text is dark for light mode
                          transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1
                           focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800
                           dark:bg-gray-950 dark:text-gray-50  // Ensure text is light for dark mode
                         dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                    >
                      Contact Us
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Why Scotty B's LEDs?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skilled Craftsmanship.  Prompt Delivery.</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team's expertise in LED artistry guarantees that each sign is a piece of illuminated perfection.  We value your time, 
                ensuring swift and reliable delivery of your LED sign.
                </p>
              </div>
            </div>
          <div className="flex flex-col lg:flex-row gap-9 max-w-5xl mx-auto py-12">
            <img
              alt="unclejohns"
              className="mx-auto max-h-[500px] max-w-[800px] overflow-hidden rounded-xl object-cover object-center lg:w-1/2"
              src={uncleJohns}
            />
              <div className="flex flex-col justify-center lg:w-1/2">
              <div className="flex flex-col justify-center space-y-12">
                <ul className="grid gap-8">
                  <li>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">Tailored to Your Taste</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      We specialize in creating custom designs that reflect your style and needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">Unmatched Quality</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Our signs are made with top-tier materials, ensuring both beauty and longevity.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold"> Eco-Friendly Efficiency</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      SB's LED's are not just eye-catching; they're also energy-efficient.
                      </p>
                    </div>
                  </li>
                </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md 
                    bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors 
                    hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 
                    disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                     dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border
                           border-gray-200 bg-white px-8 text-sm font-medium shadow-sm text-gray-900  // Ensure text is dark for light mode
                          transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1
                           focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800
                           dark:bg-gray-950 dark:text-gray-50  // Ensure text is light for dark mode
                         dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                    >
                      Contact Us
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transform Your Space with Dynamic Digital Signs</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Scotty B's LEDs, we're not just about illuminating your world with bespoke LED creations; we're also at the forefront 
                of bringing cutting-edge digital signage solutions to businesses and homes alike. Our digital signs offer an innovative 
                way to display vibrant visuals, dynamic messages, and interactive content, transforming any space into a captivating experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="digiSign1"
                className="mx-auto max-h-[700px] max-w-[800px] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src={digiSign1}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Versatile Solutions for Every Need</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Whether you're looking to enhance customer engagement in your retail store, 
                      showcase menus in your restaurant in style, or add a modern touch to your 
                      home with artful displays, our digital signs are designed to meet a wide 
                      array of needs. With crisp, clear imagery and seamless video playback, our 
                      digital signs ensure your message is not just seen but remembered.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customized to Your Specifications</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Understanding that every client has unique requirements, Scotty B's LEDs 
                      specializes in custom digital signage solutions. From the drawing board to 
                      installation, our team works closely with you to create digital signs that 
                      reflect your brand's personality and cater to your specific objectives. Choose 
                      from a variety of sizes, formats, and mounting options to fit perfectly in your designated space.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold"> Easy to Update, Effortless to Manage</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Gone are the days of static displays. Our digital signs come equipped with 
                      user-friendly software that allows for easy updates in real-time. Whether 
                      it's promoting a limited-time offer, sharing news, or celebrating a special 
                      occasion, changing your content is just a few clicks away. This flexibility 
                      ensures your digital signs remain relevant, engaging, and perfectly aligned 
                      with your evolving needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Energy-Efficient and Long-Lasting</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Embracing the latest in technology doesn't mean compromising on efficiency. 
                      Scotty B's LEDs is committed to sustainability, offering digital signs that 
                      are not only bright and beautiful but also energy-efficient and durable. 
                      Enjoy the brilliance of digital signage with the peace of mind that you're 
                      making an environmentally friendly choice.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md 
                    bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors 
                    hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 
                    disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900
                     dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border
                           border-gray-200 bg-white px-8 text-sm font-medium shadow-sm text-gray-900  // Ensure text is dark for light mode
                          transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1
                           focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800
                           dark:bg-gray-950 dark:text-gray-50  // Ensure text is light for dark mode
                         dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                    >
                      Contact Us
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="w-full bg-gray-800 py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Boost your brand's visibility with a striking LED sign.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              No matter your idea, we're here to bring it to LED life
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input 
                      className="max-w-lg flex-1 
                      rounded-md border border-gray-200 bg-white 
                      px-8 text-sm font-medium shadow-sm transition-colors focus:border-gray-300 
                      focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                      placeholder="Enter your email" 
                      type="email"
                  />
                    <button 
                      type="submit"
                      className="inline-flex h-10 
                      items-center justify-center 
                      rounded-md bg-gray-900 px-8 
                      text-sm font-medium text-gray-50 
                      shadow transition-colors hover:bg-gray-900/90 
                      focus-visible:outline-none 
                      focus-visible:ring-1 focus-visible:ring-gray-950 
                      disabled:pointer-events-none disabled:opacity-50"
                  >Sign Up</button>
                </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
              Ready to Light Up Your Idea?
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Scotty B's LED's. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


export default LandingPage;


