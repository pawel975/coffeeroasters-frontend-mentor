import React from 'react';
import { PlanWrapper } from './Plan-styling';
import BlackCup from '../../assets/plan/mobile/image-hero-blackcup.jpg';
import coffeeBean from '../../assets/home/desktop/icon-coffee-bean.svg';
import gift from '../../assets/home/desktop/icon-gift.svg';
import truck from '../../assets/home/desktop/icon-truck.svg';
import Feature from '../../Components/Features/Feature';

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

function Plan() {

  const AllFeatures = features.map(feature => (
    <Feature img={feature.img} name={feature.name} description={feature.description} />
  ))

  return (
    <PlanWrapper>
      <div className="introduction">
        <img className="background" src={BlackCup} alt="" />
        <div className="description">
          <h1>Create a plan</h1>
          <p>Build a subscription plan that best fits your needs. We offer an assortment of the best 
          artisan coffees from around the globe delivered fresh to your door.
          </p>
        </div>
      </div>
    </PlanWrapper>
  );
}

export default Plan;
