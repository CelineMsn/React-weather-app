import React from "react";
import Search from "./Search";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <div className="body">
            <Search defaultCity="q=Vancouver" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
