import React from "react";
import Header from "./components/Header";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        title="Physiotherapy Portfolio"
        subtitle="Helping you recover and thrive"
      />
    </div>
  );
};

export default App;
