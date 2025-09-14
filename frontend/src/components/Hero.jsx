const Hero = () => {
  return (
    <main className="w-full max-w-7xl flex flex-col items-center justify-center text-center p-4 pt-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kairos font-bold max-w-4xl leading-tight">
        This is What the <br className="hidden md:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
          Future Sounds Like.
        </span>
      </h1>
      <p className="text-base sm:text-lg text-gray-400 mt-4 mb-8 max-w-2xl">
        Unleash power, style, and innovation in one machine.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-white font-gilroy text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
          Explore Models
        </button>
        <button className="px-6 py-3 border font-gilroy border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors">
          Learn More
        </button>
      </div>
      <div className="mt-16 sm:mt-24 lg:mt-32 w-full flex justify-center">
        {/* Placeholder image of a black cafe racer style motorcycle with copper pipes */}
        <img
          src=""
          alt="A futuristic black motorcycle with orange copper exhaust pipes"
          className="w-full max-w-3xl lg:max-w-4xl object-contain animate-fade-in"
        />
      </div>
    </main>
  );
};

export default Hero;