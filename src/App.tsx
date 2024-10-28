import React from "react";
import Header from "./components/Header";
import "./index.css";
import MainComponent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <>
      {/* Main Container */}
      <div className="relative h-1/2  lg:h-screen bg-gradient-to-t from-primary">
        <Header
          title="PhysioEliezel"
          subtitle="Helping you recover and thrive"
        />
        <MainComponent />
      </div>
    </>
  );
};

export default App;
