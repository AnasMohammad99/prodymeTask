import React from "react";
import Header from "./Header";
import "./App.css";
import Left from "./Left";
import Right from "./Right";
import Center from "./Center";

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="body">
          {/* left */}
          <Left />
          {/* center */}
          <Center />
          {/* right */}
          <Right />
        </div>
      </div>
    </div>
  );
};

export default App;
