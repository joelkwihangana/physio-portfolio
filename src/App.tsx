import React from "react";
import Header from "./components/Header";
import "./index.css";
import MainComponent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <>
      {/* Main Container */}
      <Header title="PhysioEliezel" subtitle="Helping you recover and thrive" />
      <MainComponent />
    </>
  );
};

export default App;
