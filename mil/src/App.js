import React from "react";
import PostForm from "./PostForm";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


require("typeface-montserrat");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
