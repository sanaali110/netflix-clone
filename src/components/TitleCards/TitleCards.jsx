import React, {useEffect, useState} from 'react'
import './TitleCards.css'
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import './TitleCards.css'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    responsive: [
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 5,
          }
      },
      {
        breakpoint: 400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 5,
        }
    }
    
    
    ]
  };
  const  [apiData, setApiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjFkNTNmZjY4YzQyNTdkMzVjYzljN2IxZTg4MmEwOSIsIm5iZiI6MTcyOTc2MTUyNy43MDAxODIsInN1YiI6IjYzODYxMDEwNWVkOGU5MDBjYTcyMjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AtwmLMX6seTRphkTB2xHiUBZcJuq0CCQv-nRsuk81g8'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));  
   },[])

return (
<div className="heading_slider">
  <h2>{title ? title : "Popular with Netflix"}</h2>
  <Slider {...settings}>    
        {apiData.map((card,index)=>{
          return   <Link to={`/player/${card.id}`} className="card" key={index}>
                       <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
                       <p>{card.original_title}</p>
                     </Link>
        })}
      </Slider>
</div>

)

}

export default TitleCards
