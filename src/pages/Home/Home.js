import React, {useState} from 'react';
import CoffeePicture from '../../assets/home/mobile/image-hero-coffeepress.jpg';
import {HomeWrapper} from './Home-styling.js'
import Collection from '../../Components/Collection/Collection';
import GranEspresso from "../../assets/home/desktop/image-gran-espresso.png"
import Planalto from "../../assets/home/desktop/image-planalto.png"
import Piccollo from "../../assets/home/desktop/image-piccollo.png"
import Danche from "../../assets/home/desktop/image-danche.png"
import coffeeBean from '../../assets/home/desktop/icon-coffee-bean.svg';
import gift from '../../assets/home/desktop/icon-gift.svg';
import truck from '../../assets/home/desktop/icon-truck.svg';
import Feature from '../../Components/Features/Feature';

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
        description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
      },
      {
        img: Piccollo,
        name: "Piccollo",
        description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry'
      },
      {
        img: Danche,
        name: "Danche",
        description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
      },
  ]

  const features = [
    {
      img: coffeeBean ,
      name: "Best quality",
      description: "Discover and endless variety of the world's best artisan coffee from each of out roasters."
    },
    {
      img: gift ,
      name: "Exclusive benefits",
      description: "Special offers and swag when you subscribe, including 30% off your first shipment."
    },
    {
      img: truck ,
      name: "Free shipping",
      description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
    }
  ]
  const AllCoffees = coffee.map(option=> (
    <Collection img={option.img} name={option.name} description={option.description}/>

  ))

  const AllFeatures = features.map(feature => (
    <Feature img={feature.img} name={feature.name} description={feature.description} />
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
      <div className="benefits">
          <section className="intro">
            <section className="text">
              <h1>Why choose us?</h1>
              <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level</p>
            </section>
          </section>
          <section className="features">
              {AllFeatures}
          </section>
      </div>
    </HomeWrapper>
  );
}

export default Home;
