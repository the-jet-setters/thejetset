import React from 'react';

function Footer(props) {
    return (
    <nav id="footer" className="bg-black">
    
    {/* Container */}
    <div className="container mx-auto pt-8 pb-4">

        <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
            
            {/* Column 1 */}
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h2 className="text-white">The Jet Setter</h2>
            </div>

            {/* Column 2 */}
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 className="text-white">Company</h4>
                
                <ul className="mt-4 nav navbar-nav">
                    <li id="navi-2" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/AboutUs">About Us</a> 
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/OurStore">Our Store</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/Careers">Careers</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/Affiliate Program">Affiliate Program</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/Advertise">Advertise</a>
                    </li>
                </ul>
            
            </div>
        
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4>Info</h4>
            
                <ul className="mt-4">
                    <li id="navi-2" className="leading-7 text-sm">
                        <a className="mt-2 text-white no-underline text-small" href="/Blog">Blog</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/DeliveryOption">Delivery Option</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/BuyerProtection">Buyer Protection</a>
                    </li>
                </ul>
            </div>

            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 className="text-white">Contact Us</h4>
            
                <ul className="mt-4 ContactUs">
                    <li id="navi-2" className="leading-7 text-sm">
                        <a className="text-white no-underline flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white m-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                            + 1 800-973-0321</a>
                    </li>
                    
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small flex items-center" href="/DeliveryOption">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white m-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"/>
                            <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"/></svg>
                            hello@thejetsetters.com</a>
                    </li>
                    <li id="navi-1" className="leading-7 text-sm">
                        <a className="text-white no-underline text-small" href="/BuyerProtection">Subscribe Now</a>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Enter Your Email"></input>

                    </li>
                </ul>
            </div>
            
        </div>
        

        {/* Footer */}
        <div className="pt-4 md:flex md:items-center md:justify-center">
            <ul className="">
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/Kimberlybree">Kimberly Bree</a></li>
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/nlo88">Nita Lo</a></li>
                <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-white no-underline text-small" href="https://github.com/ZavierLowe">Zavier Lowe</a></li>
                </ul>
            </div>

    </div>
    </nav>
    );
}

export default Footer;     