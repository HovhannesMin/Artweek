import "./about.css";
import Logo from './svg/logo';
import aboutus from "./images/aboutus.png";
import Backicon from './svg/back';

function About() {
  return (
    <>
      <div className="container">
        <div className="custom-container">
          <Logo className="logo" />
          <p className="name">ABOUT EVENT</p>
          <div className="title">
            <div className="abouttext">
                 International GYUMRI ART WEEK 2023 will present a synthesis and
            revision of the application of newresearch models, as well as
            rethinking the perceptions of modern HUMAN in the vision of time,
            whereart, mathematical, religious, and political palettes
            intersect.The history of mathematics can be viewed as an
            ever-growing set of abstractions in which the termsimmigration and
            emigration are considered:Mathematics as a science and a study forms
            the concept of actions to describe sequences, relationshipsand
            forms, which creates a direct link between immigration (×) and
            emigration (y)․Mathematics is the engine of love, justice and
            development․This is how people who have chosen thescience of
            structures, sequences and relationships describe it.
            </div>
            <div className="aboutPhoto"><img src={aboutus} className='aboutusphoto'/></div>
          </div>
          
        </div>
        <Backicon className='backicon'/>
      </div>
    </>
  );
}

export default About;
