import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Food from "./Food";
import Category from "./Category";
import Footer from "./Footer";
import QuickActions from "./QuickAction";
import PosterWithBlinkingBorder from "./Poster";

export const Home=()=>{
    return(
        <div>
        <Navbar/>
        <Hero />
      {/* <Card /> */}
      <QuickActions/>
      <Food />
      <PosterWithBlinkingBorder/>
      <Category />
      <Footer/>
      </div>
    )
}