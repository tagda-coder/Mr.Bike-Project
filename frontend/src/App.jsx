import React from 'react';
import Page from './pages/Page.jsx';

// Main App component that wraps all other components
const App = () => {
  return (
    <div className="w-full h-screen bg-black text-white min-h-screen font-sans overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
      <Page />
    </div>
  );
};


export default App;