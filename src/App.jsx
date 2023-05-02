import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";



function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Information/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
