const Header = () => {
  return (
    <header className="w-full max-w-7xl flex justify-between items-center py-6 px-4">
      <div className="flex items-center space-x-2">
        {/* SVG for the logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M8.625 2.25a.75.75 0 0 1 .75-.75h6.75a.75.75 0 0 1 .75.75V3.75a.75.75 0 0 0 .75.75h.286A3.75 3.75 0 0 1 20.25 8.25v.75A.75.75 0 0 1 19.5 9.75h-15a.75.75 0 0 1-.75-.75v-.75A3.75 3.75 0 0 1 5.064 4.5H5.25a.75.75 0 0 0 .75-.75V2.25ZM12 11.25a.75.75 0 0 0-1.5 0V15a.75.75 0 0 0 1.5 0v-3.75ZM7.5 11.25a.75.75 0 0 0-1.5 0V15a.75.75 0 0 0 1.5 0v-3.75ZM18 11.25a.75.75 0 0 0-1.5 0V15a.75.75 0 0 0 1.5 0v-3.75ZM5.25 18a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25v2.25A2.25 2.25 0 0 1 16.5 22.5h-9A2.25 2.25 0 0 1 5.25 20.25v-2.25Z"
          />
        </svg>
        <span className="text-xl font-bold font-kairos">MOTO</span>
      </div>
      <nav className="hidden lg:flex items-center space-x-8 text-sm font-gilroy">
        <a href="#" className="hover:text-gray-400 transition-colors">Models</a>
        <a href="#" className="hover:text-gray-400 transition-colors">Technology</a>
        <a href="#" className="hover:text-gray-400 transition-colors">Experience</a>
        <a href="#" className="hover:text-gray-400 transition-colors">Support</a>
      </nav>
      <div className="flex items-center space-x-4">
        {/* SVG for search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <button className="px-5 py-2 border font-gilroy border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
          Order Now
        </button>
      </div>
    </header>
  );
};


export default Header;