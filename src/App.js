import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Movies from "./components/containers/Movies";
import AddMovie from "./components/AddMovie";
const App = () => {
  return (
    <>
      <div>
        <Header />
        <Movies />
        <AddMovie />
        <Footer />
      </div>
    </>
  );
};

export default App;
