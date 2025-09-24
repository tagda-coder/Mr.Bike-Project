import React from 'react';
import LandingPageV1 from "./pages/LandingPageV1.jsx"
import LandingPageV2 from "./pages/LandingPageV2.jsx"

// Main App component that wraps all other components
const App = () => {
  return (
    <div className="main-container w-full h-screen bg-black">
      <LandingPageV2 />
    </div>
  );
};


export default App;