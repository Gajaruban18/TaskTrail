import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-8 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow">
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-6">
        <a href="#about" className="link link-hover transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">About us</a>
        <a href="#contact" className="link link-hover transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        <a href="#jobs" className="link link-hover transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">Jobs</a>
        <a href="#press" className="link link-hover transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">Press kit</a>
      </nav>

      {/* Social Media Icons */}
      <nav>
        <div className="grid grid-flow-col gap-6 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="transform hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-blue-500 dark:text-blue-400" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.194 9.86a4.903 4.903 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.626 1.956 2.444 3.379 4.6 3.419A9.867 9.867 0 010 19.54a13.924 13.924 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="transform hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-500 dark:text-red-400" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM8 16V8l8 4-8 4z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transform hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-blue-700 dark:text-blue-500" width="24" height="24" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.667C14 5.712 14.192 5.333 15.115 5.333H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside className="mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
