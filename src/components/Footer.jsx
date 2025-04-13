// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              TrainsCat
            </h3>
            <p className="mb-6 text-gray-300">
              We help businesses grow through strategic marketing solutions that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Email Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Digital Advertising</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Customer Acquisition</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Analytics & Reporting</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Content Creation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Marketing Automation</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Marketing Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1 mr-3" />
                <span className="text-gray-300">123 Marketing Street, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-primary mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3" />
                <span className="text-gray-300">info@trainscat.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TrainsCat Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;