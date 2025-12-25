import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-[#030712] text-gray-300 px-10 py-5 border-2 border-t-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-white">ShopEase</span>. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-gray-400">
          🚀Soham Mondal
        </p>

        {/* Right */}
        <div className="flex items-center gap-5 text-lg">
          <a href="#" className="hover:text-white transition">
            <i className="ri-github-fill"></i>
          </a>
          <a href="#" className="hover:text-white transition">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="#" className="hover:text-white transition">
            <i className="ri-twitter-x-fill"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer;