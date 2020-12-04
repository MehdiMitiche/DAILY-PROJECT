import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./home.css";
import ParticleComponent from "./components/ParticleComponent";

const Home = () => {
  return (
    <div>
      <ParticleComponent />
      <Header />
      <div className="home-container">
        <div className="home-row">
          <Card />
          <Card />
        </div>
        <div className="home-row">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
