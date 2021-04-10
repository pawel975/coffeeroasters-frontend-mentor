import React, {useState} from 'react';
import CoffeePicture from '../../assets/home/mobile/image-hero-coffeepress.jpg';
import {HomeWrapper} from './Home-styling.js'
import Collection from '../../Components/Collection/Collection';
import GranEspresso from "../../assets/home/desktop/image-gran-espresso.png"
import Planalto from "../../assets/home/desktop/image-planalto.png"
import Piccollo from "../../assets/home/desktop/image-piccollo.png"
import Danche from "../../assets/home/desktop/image-danche.png"

function Home() {

  const coffee = [
      {
        img: GranEspresso,
        name: "Gran Espresso",
        description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
      },
      {
        img: Planalto,
        name: "Planalto",
        description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
      },
      {
        img: Piccollo,
        name: "Piccollo",
        description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
      },
      {
        img: Danche,
        name: "Danche",
        description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
      },
  ]

  const AllCoffees = coffee.map(option=> (
    <Collection img={option.img} name={option.name} description={option.description}/>

  ))

  return (
    <HomeWrapper>
      <div className="introduction">
        <img className="background" src={CoffeePicture} alt="" />
        <div className="description">
          <h1>Great coffee made simple.</h1>
          <p>Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
          <button>Create your plan</button>
        </div>
      </div>
      <div className="collection">
          <h1 className="title">our collection</h1>
          {AllCoffees}
      </div>
    </HomeWrapper>
  );
}

export default Home;
