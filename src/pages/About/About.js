import React, {useEffect, useContext} from 'react';
import { AboutWrapper } from './About-styling';
import ImageHeroWhitecupMobile from '../../assets/about/mobile/image-hero-whitecup.jpg'
import ImageHeroWhitecupTablet from '../../assets/about/tablet/image-hero-whitecup.jpg'
import ImageCommitmentMobile from '../../assets/about/mobile/image-commitment.jpg'
import ImageCommitmentTablet from '../../assets/about/tablet/image-commitment.jpg'
import Quality from '../../assets/about/mobile/image-quality.jpg'
import UnitedKingdom from '../../assets/about/desktop/illustration-uk.svg';
import Canada from '../../assets/about/desktop/illustration-canada.svg';
import Australia from '../../assets/about/desktop/illustration-australia.svg';
import Quarter from '../../Components/Quarter/Quarter';
import { CoffeeContext } from '../../Components/CoffeeRoasterContext';

const quarters = [
  {
    img: UnitedKingdom,
    country:"United Kingdom",
    street: "68  Asfordby Rd", 
    city: "Alcaston",
    postCode: "SY6 1YA",
    tel: "+44 1241 918425"
  },
  {
    img: Canada,
    country:"Canada",
    street: "1528  Eglinton Avenue", 
    city: "Toronto",
    postCode: "Ontario M4P 1A6",
    tel: "+1 416 485 2997"
  },
  {
    img: Australia,
    country:"Australia",
    street: "36 Swanston Street", 
    city: "Kewell",
    postCode: "Victoria",
    tel: "+61 4 9928 3629"
  },
]

const AllQuarters = quarters.map(quarter => (
  <Quarter img={quarter.img} country={quarter.country} street={quarter.street} city={quarter.city} postCode={quarter.postCode} tel={quarter.tel}/>
))

function About() {

  
  const [state, setState] = useContext(CoffeeContext);

  useEffect(() => (
    setState({
      howYouDrink: "",
      typeOfCoffee:"",
      howMuch: "",
      grinded: "",
      deliver:"",
    })
  ), [])

  return (
    <AboutWrapper>
      <div className="introduction">
        <img className="background-mobile" src={ImageHeroWhitecupMobile} alt="" />
        <img className="background-tablet" src={ImageHeroWhitecupTablet} alt="" />
        <div className="description">
          <h1>About Us</h1>
          <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
        </div>
      </div>
      <div className="commitment">
        <img className="commitment-mobile" src={ImageCommitmentMobile} alt="" />
        <img className="commitment-tablet" src={ImageCommitmentTablet} alt="" />
        <div className="description">
          <h1>Our commitment</h1>
          <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
      </div>
      <div className="quality">
        <img src={Quality} alt="" />
        <div className="description">
          <h1>Uncompromising quality</h1>
          <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
          consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
      </div>
      <div className="quarters">
        <h1 className="title">Our headquarters</h1>
        {AllQuarters}
      </div>
    </AboutWrapper>

  )
  ;
}

export default About;
