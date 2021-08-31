import React from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LinkIcon from "@material-ui/icons/Link";
import "./Project.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Project({ image, link, text, time ,alt,title,techUsed1,techUsed2,techUsed3,techUsed4,techUsed5,techUsed6,techUsed7}) {
  return (
    <div className="project__container">
      <div className="photo__container">
          <img src={image} alt={alt}/>
      </div>
      <div className="text__container">
          <div className="project__title">
              <h5>{title}</h5>
          </div>
          <div className="project__text">
              <p>{text}</p>
          </div>
            <p>
                <div className="time__completed">
                    <i>
                           <AccessAlarmIcon /> {time}
                   </i>
                </div>
          
          <div className="proj__link">
               <i >
                <LinkIcon />  <a href={link} target="blank" >{link}</a>
             </i>
          </div>
           
              <i><CheckCircleOutlineIcon /> <u>Tech Used</u></i>  {"  >"}
           <div className="technology__used">
               <div>{   techUsed1 ?  <p>  {techUsed1} •</p> : null}</div> 
               <div> {   techUsed2 ?  <p>  {techUsed2} •</p> : null}</div>
               <div> {   techUsed3 ?  <p>  {techUsed3} •</p> : null}</div>
               <div>{   techUsed4 ?  <p>  {techUsed4} •</p> : null}</div>
               <div>{   techUsed5 ?  <p>  {techUsed5} •</p> : null}</div> 
               <div>{   techUsed6 ?  <p>  {techUsed6} •</p> : null}</div>
               <div>{   techUsed7 ?  <p>  {techUsed7} •</p> : null}</div>
           </div>
           
            </p>
      </div>
    </div>
  );
}

export default Project;
