import React from 'react'
import "./HomePage.css";
import githubAnime from "../../Assets/githubAnime.png"
import Avatar from '@material-ui/core/Avatar';
import Abu from "../../Assets/Abu.jpg"

function HomePage() {
    return (
        <div  className="HomePageBackground">
                  {/* <div className="HomePageBackground" ><iframe src="https://giphy.com/embed/11kEuHSQAXXiGQ"  class="giphy-embed"  allowFullScreen></iframe> </div>  */}
          
            <div className="HomePageImg">
                        <img src={githubAnime} alt="home page pic"/>
            </div>
            {/* <Avatar alt="Abraham lugonzo" src={Abu} id="profile-photo" /> */}
        </div>
    )
}

export default HomePage;
