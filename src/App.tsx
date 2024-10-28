import React from "react";
import Header from "./components/Header";
import "./index.css";
import MainComponent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <>
      {/* Main Container */}
      <div className="relative min-h-screen bg-gradient-to-t from-primary dark:from-slate-800 dark:to-slate-900 overflow-hidden">
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
