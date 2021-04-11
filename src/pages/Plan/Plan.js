import React from 'react';
import { PlanWrapper } from './Plan-styling';
import BlackCup from '../../assets/plan/mobile/image-hero-blackcup.jpg';
import Step from '../../Components/Step/Step';
import Dropdown from '../../Components/Dropdown/Dropdown';


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

function Plan() {

  const AllSteps = steps.map(step => (
    <Step number={step.number} name={step.name} description={step.description}/>
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
      <div className="steps">
          {AllSteps}
      </div>
      <Dropdown/>
      
    </PlanWrapper>
  );
}

export default Plan;
