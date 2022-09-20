import React from "react";
import { name, city } from "../data/data.js";

function ownerName(name) {
  if (name) {
    return "Liza";
  }else {
    return "Not Liza";
  }
}
  function ownerCity(city) {
    if(city) {
      return "New York";
    }else {
      return "Nairobi"
    }
  }

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={{color:'firebrick'}}>{ownerName(name)} is a Web Developer from {ownerCity(city)}</h1>
    </div>);
}

export default Home;
