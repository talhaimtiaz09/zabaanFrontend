import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon="fa-regular fa-envelope" className='mr-3' />
            <span>info@zabaan.com</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon="fa-solid fa-square-phone" className='mr-3' />
            <span>+123 456 789</span>
          </div>
          <div className="flex items-center">
          <FontAwesomeIcon icon="fa-solid fa-globe" className='mr-3'/>           
           <span>www.zabaan.com</span>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Pre-translated Courses</a></li>
            <li><a href="/for-instructors">Sell your course</a></li>

          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
