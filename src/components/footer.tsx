import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Bagian Atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Informasi Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <p className="text-sm mb-2">
              <strong>Address:</strong> Jl. Example No. 123, Jakarta, Indonesia
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> +62 812 3456 7890
            </p>
            <p className="text-sm">
              <strong>Email:</strong> contact@kitabantu.co.id
            </p>
          </div>
          {/* Tautan Halaman Penting */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm hover:underline hover:text-indigo-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-sm hover:underline hover:text-indigo-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-sm hover:underline hover:text-indigo-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* Tautan Sosial Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300"
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
          {/* Pesan Singkat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Mission</h4>
            <p className="text-sm">
              Helping businesses grow with innovative and measurable strategies.
              Lets build the future together
            </p>
          </div>
        </div>
        {/* Bagian Bawah */}
        <div className="border-t border-indigo-600 pt-6 text-center">
          <p className="text-sm">
            {new Date().getFullYear()} PT.Kita Bantu Indonesia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
