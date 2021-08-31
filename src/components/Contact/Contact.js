import React from 'react'
import "./Contact.css";
import TextTransition, { presets } from "react-text-transition";
import CallIcon from '@material-ui/icons/Call';
import { useCountUp } from "react-countup";
import EmailIcon from '@material-ui/icons/Email';
import ScrollAnimation from 'react-animate-on-scroll';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import GoogleMaps from '../../GoogleMaps/GoogleMaps';
import Button from '@material-ui/core/Button';
import TypeAnimation from 'react-type-animation';


function Contact() {

    const { countUp } = useCountUp({ end: 713568753 ,delay:3});
    const [index, setIndex] = React.useState(0);
    const TEXTS = [
        "Contact",
        "Whatsapp",
        "Email",
        "Chat"
      ];

      React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
        <div  className="Contact">
                 <h5 id="page_title">
                   <TypeAnimation
                        cursor={true}
                        sequence={['Contacts', 3000,'       ',3000]}
                        wrapper="p"
                        repeat={Infinity}
                      />  
                 </h5>  
            <div className="contact__title">
                <TextTransition text={ TEXTS[index % TEXTS.length] } springConfig={ presets.molasses } />{"   "} Me  <CallIcon />
            </div>
 
            <div className="call__container1">
                <ScrollAnimation animateIn='bounceInRight'animateOut='bounceOutLeft'>
                    <div className="call__log">
                        <p><EmailIcon color="primary"/><i>abramlugonzo@gmail.com</i></p> 
                        <p> <CallIcon  color="primary"/><i> 0{countUp} </i></p>
                        <p> <a href="https://twitter.com/Alloyd_lugzz?s=03" target="blank" id="media__links" > <TwitterIcon />  <i>Twitter</i></a> </p>
                        <p> <a href="https://www.linkedin.com/in/abraham-lugonzo-4448041a8/" target="blank" id="media__links" ><LinkedInIcon color="primary" /><i>Linkedin</i> </a>  </p>
                        <p> <a href="https://github.com/Abuu001" target="blank" id="github" ><GitHubIcon   /> <i>Github</i></a></p>
                        <p><LocationOnIcon /> <i>Kenya, Nairobi</i></p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounce' initiallyVisible={true} animateOnce={false}>
                    <div className="contact__form">      
                            <p id="form__heading">Leave me a Message</p>
                        <label   id="form__heading">Name</label> <input type="text"  placeholder="Name"/> <br/>
                        <label   id="form__heading">Message</label>  <textarea  placeholder="Write a message"  rows="8" cols="40"/>
                        <Button variant="outlined" color="primary">
                            Send Message
                        </Button>
                    </div>   
                </ScrollAnimation>
            </div> 
         
                <div className="container2">
                    <GoogleMaps /> 
                </div>
        </div>
    )
}

export default Contact
