import React, { useContext, useEffect } from 'react';
import CoffeePictureMobile from '../../assets/home/mobile/image-hero-coffeepress.jpg';
import CoffeePictureTablet from '../../assets/home/tablet/image-hero-coffeepress.jpg';
import CoffeePictureDesktop from '../../assets/home/desktop/image-hero-coffeepress.jpg';
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
import Step from '../../Components/Step/Step';
import {Link} from 'react-router-dom';
import { CoffeeContext } from '../../Components/CoffeeRoasterContext';

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
  ];

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

  const steps = [
    {
      number: '01',
      name: "Pick your coffee",
      description: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
      number: '02',
      name: "Choose the frequency",
      description: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
      number: '03',
      name: "Receive and enjoy!",
      description: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    },
  ]

  const [state, setState] = useContext(CoffeeContext)

  useEffect(() => (
    setState({
      howYouDrink: "",
      typeOfCoffee:"",
      howMuch: "",
      grinded: "",
      deliver:"",
    })
  ), [])

  const AllCoffees = coffee.map(option=> (
    <Collection img={option.img} name={option.name} description={option.description}/>

  ))

  const AllFeatures = features.map(feature => (
    <Feature img={feature.img} name={feature.name} description={feature.description} />
  ))

  const AllSteps = steps.map(step => (
    <Step number={step.number} name={step.name} description={step.description}/>
  ))

  return (
    <HomeWrapper>
      <div className="introduction">
        <img className="background-mobile" src={CoffeePictureMobile} alt="" />
        <img className="background-tablet" src={CoffeePictureTablet} alt="" />
        <img className="background-desktop" src={CoffeePictureDesktop} alt="" />
        <div className="description">
          <h1>Great coffee made simple.</h1>
          <p>Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
          <Link to="/plan">
            <button>Create your plan</button>
          </Link>
        </div>
      </div>
      <div className="collection">
          <h1 className="title">our collection</h1>
          <div className="collection-container">
            {AllCoffees}
          </div>
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
      <div className="steps">
          <h1 className="title">How it works</h1>
          <div className="steps-path">
            <div className="line"></div>
            <div className="check-point"></div>
            <div className="check-point"></div>
            <div className="check-point"></div>
          </div>
          <div className="steps-container">
            {AllSteps}
          </div>
          <Link to="/plan">
            <button>Create your plan</button>
          </Link>
      </div>
    </HomeWrapper>
  );
}


export default Home;
