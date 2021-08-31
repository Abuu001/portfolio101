import React from 'react'
import "./GoogleMaps.css"

function GoogleMaps() {
  return ( 
    <div className="video-container ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.43269701872!2d36.74509976076068!3d-1.3021297411938464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%20County!5e0!3m2!1sen!2ske!4v1616521471977!5m2!1sen!2ske" width={600} height={450} allowfullscreen=""></iframe>
    </div>
  )
}

export default GoogleMaps
