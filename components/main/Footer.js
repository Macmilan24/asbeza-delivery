import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaRss,
  FaGooglePlusG,
  FaPhone,
  FaFax,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-6 bg-[#096a13] text-white">
      <div className="w-full md:w-5/6 lg:w-4/6 pt-10">
        <div className="w-full flex flex-col items-center ">
          <hr className="border-gray-400 w-full" />
          <div className="flex flex-col md:flex-row w-full justify-between items-center my-6 px-4 space-y-4 md:space-y-0">
            {/* Left Section with Logo */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-10 items-center mb-4 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={170}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Right Section with Contact Info */}
            <div className="w-full md:w-1/2 text-center md:text-right space-y-2">
              <div className="flex justify-center md:justify-start items-center mb-4">
                <FaEnvelope />
                <span className="ml-4 font-thin">info@asbeza.com</span>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center pb-2">
                <div className="flex justify-center md:justify-end items-center mb-2 md:mb-0">
                  <FaPhone />
                  <span className="ml-4 font-thin">(251) 923512007</span>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                  <FaFax />
                  <span className="ml-4 font-thin">(123) 456-7890</span>
                </div>
              </div>

              <div className="w-full flex justify-between items-center mt-4 ">
                <span className="">Social Media</span>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaGooglePlusG size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaPinterest size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaRss size={20} />
                </a>
              </div>
            </div>
          </div>
          <hr className="border-gray-400 w-full" />
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-xs my-4">
          <a href="#" className="hover:underline font-thin">
            ABOUT US
          </a>
          <a href="#" className="hover:underline font-thin">
            CONTACT US
          </a>
          <a href="#" className="hover:underline font-thin">
            HELP
          </a>
          <a href="#" className="hover:underline font-thin">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:underline font-thin">
            DISCLAIMER
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full text-xs font-thin flex justify-center md:justify-end">
          <p>Copyright © 2023 • Asbeza Delivery Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
