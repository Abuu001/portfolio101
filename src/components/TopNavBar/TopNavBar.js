import React from "react";
import "./TopNavBar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import SignalWifi3BarLockIcon from '@material-ui/icons/SignalWifi3BarLock';
import CallIcon from '@material-ui/icons/Call';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
 
function TopNavBar() {
  return (
    <div className="TopNavBar">
    <ul  className="row1">
      <li>
        <div className="lk">
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#8dc442" }}
            to="/"
          >
              <span id="tab-row">  <HomeIcon />  Home </span>
          </NavLink>
        </div>
      </li>
      <li>
        <div className="lk">
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#8dc442" }}
            to="/about-me"
          >
              <span  id="tab-row"><InfoIcon />  About </span>
          </NavLink>
        </div>
      </li>
      <li>
        <div className="lk">
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#8dc442" }}
            to="/services"
          >
              <span id="tab-row"><BuildIcon />     Services</span>
          </NavLink>
        </div>
      </li>
      </ul>
      <ul  className="row2">
      <li>
        <div className="lk">
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#8dc442" }}
            to="/work"
          >
            <span id="tab-row"><FormatListBulletedIcon /> Work</span> 
          </NavLink>
        </div>
      </li>
      <li>
        <div className="lk">
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#8dc442" }}
            to="/strenghts"
          >
               <span id="tab-row"> <SignalWifi3BarLockIcon  />   Strengths  </span>
          </NavLink>
        </div>
      </li>
      <li>
        <div className="lk">
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: "#8dc442" }}
            to="/contact"
          >
           <span id="tab-row"> <CallIcon />   Contact</span> 
          </NavLink>
        </div>
      </li>
      </ul>
  </div>
    
  );
}

export default TopNavBar;
