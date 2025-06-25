import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">cyber</h2>
          <p className="text-gray-400 text-sm">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-xl text-white">
            <a  aria-label="Twitter">
              <FaTwitter />
            </a>
            <a  aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a  aria-label="TikTok">
              <FaTiktok />
            </a>
            <a  aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Assistance to the buyer</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
