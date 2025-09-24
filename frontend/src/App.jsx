import React from 'react';
import Page from './pages/Page.jsx';
import Application from './pages/Application.jsx';

// Main App component that wraps all other components
const App = () => {
  return (
    <div className="main-container w-full h-screen">
      <Application />
    </div>
  );
};


export default App;