import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import '../Home/Home.css'

function Shows() {

  const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjFkNTNmZjY4YzQyNTdkMzVjYzljN2IxZTg4MmEwOSIsIm5iZiI6MTczMjE5NzY3OS44ODY3MDgzLCJzdWIiOiI2Mzg2MTAxMDVlZDhlOTAwY2E3MjI2ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ieixXcjm9xQUekxVZDgNaC53fHIWL44Xswg0e8bHWsE'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
  return (
    <div className='shows'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt=""className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img"/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>

     
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Shows
