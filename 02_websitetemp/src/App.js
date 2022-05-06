import React from "react";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AppSection from "./components/AppSection/AppSection";
import CardSection from "./components/CardSection/CardSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
};
export default App;
