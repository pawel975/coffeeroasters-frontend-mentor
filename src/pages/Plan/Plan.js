import React, {useContext, useState} from 'react';
import { PlanWrapper } from './Plan-styling';
import BlackCupMobile from '../../assets/plan/mobile/image-hero-blackcup.jpg';
import BlackCupTablet from '../../assets/plan/tablet/image-hero-blackcup.jpg';
import Step from '../../Components/Step/Step';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { CoffeeContext } from '../../Components/CoffeeRoasterContext';
import {Link} from 'react-router-dom';

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

const aspects = [
  {
    id: 0,
    question:"How do you drink your coffee?",
    options: [
      {
        name: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers"
      },
      {
        name: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60"
      },
      {
        name: "Espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience"
      },
    ]
  },
  {
    id: 1,
    question:"What type of coffee?",
    options: [
      {
        name: "Single Origin",
        text: "Distinct, high quality coffee from a specific family-owned farm"
      },
      {
        name: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed"
      },
      {
        name: "Blended",
        text: "Combination of two or three dark roasted beans of organic coffees"
      },
    ]
  },
  {
    id: 2,
    question:"How much would you like?",
    options: [
      {
        name: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups."
      },
      {
        name: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups."
      },
      {
        name: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups."
      },
    ]
  },
  {
    id: 3,
    question:"Want us to grind them?",
    options: [
      {
        name: "Wholebean",
        text: "Best choice if you cherish the full sensory experience"
      },
      {
        name: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress"
      },
      {
        name: "Cafetiére",
        text: "Course ground beans specially suited for french press coffee"
      },
    ]
  },
  {
    id: 4,
    question:"How often should we deliver?",
    options: [
      {
        name: "Every week",
        text: "$7.20 per shipment. Includes free first-class shipping."
      },
      {
        name: "Every 2 weeks",
        text: "$9.60 per shipment. Includes free priority shipping."
      },
      {
        name: "Every month",
        text: "$12.00 per shipment. Includes free priority shipping."
      },
    ]
  },
]


function Plan() {
  
  
  const [state, setState] = useContext(CoffeeContext)

  const [modalActive, setModalActive] = useState(false)

  const orderSummary = [
    state.typeOfCoffee !== "" ? aspects[0].options[state.typeOfCoffee].name : null,
    state.typeOfCoffee !== "" ? aspects[1].options[state.typeOfCoffee].name : null,
    state.howMuch !== "" ? aspects[2].options[state.howMuch].name: null,
    state.grinded !== "" ? aspects[3].options[state.grinded].name : null,
    state.deliver !== "" ? aspects[4].options[state.deliver].name : null
  ]

  const AllSteps = steps.map(step => (
    <Step number={step.number} name={step.name} description={step.description}/>
  ))

  const AllAspects = aspects.map(aspect => (
    <Dropdown state={state} setState={setState} id={aspect.id} aspect={aspect}/>
  ))

  const handleModalOpen = () => {
    setModalActive(!modalActive)
    console.log(window.innerWidth)
  }


  return (
    <PlanWrapper>
      <div className="introduction">
        <img className="background-introduction-mobile" src={BlackCupMobile} alt="" />
        <img className="background-introduction-tablet" src={BlackCupTablet} alt="" />
        <div className="description">
          <h1>Create a plan</h1>
          <p>Build a subscription plan that best fits your needs. We offer an assortment of the best 
          artisan coffees from around the globe delivered fresh to your door.
          </p>
        </div>
      </div>
      <div className="steps">
      <div className="steps-path">
            <div className="line"></div>
            <div className="check-point"></div>
            <div className="check-point"></div>
            <div className="check-point"></div>
          </div>
          <div className="steps-container">
            {AllSteps}
          </div>
      </div>
      {AllAspects}
      {!orderSummary.includes(null) && 
        <section className="summary">
          <div className="summary-text">
            <h1>ORDER SUMMARY</h1>
            <p>"I drink my coffee as <span>{orderSummary[0]}</span>, with a   <span>      {orderSummary[1]}</span> type of bean. <span>{orderSummary[2]}</span>   ground ala <span>{orderSummary[3]}</span>, sent to me <span>{orderSummary[4]}</span>."
            </p>
          </div>
          <Link to="/plan">
            <button onClick={handleModalOpen}>Create my plan!</button>
          </Link>
        </section>}
      {modalActive && <section className="modal-wrapper">
        <div className="modal-background"></div>
        <section className="modal-summary">
            <div className="modal-summary-text">
              <header>              
                <h1>Order Summary</h1>
              </header>
              <p className="summary-description">"I drink my coffee as <span>{orderSummary[0]}</span>, with a <span> {orderSummary[1]}</span> type of bean. <span>{orderSummary[2]}</span>   ground ala <span>{orderSummary[3]}</span>, sent to me <span>{orderSummary[4]}</span>."
              </p>
              <p className="summary-confirm">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
              </p>
              <div className="checkout-container">
                <h1>{window.innerWidth > 768 ? "$14.00 / mo":""}</h1>
                <button onClick={handleModalOpen}>Checkout {window.innerWidth < 768? "- $14.00 / mo":"" }</button>
              </div>
            </div>
        </section>
      </section> }
    </PlanWrapper>
  );
}

export default Plan;
