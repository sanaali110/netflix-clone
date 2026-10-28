import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

const {id} = useParams();
const navigate = useNavigate();
const clickHandler = () => navigate("/");
  const [apiData,setApiData] = useState({
    name: "",
    key:"",
    published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjFkNTNmZjY4YzQyNTdkMzVjYzljN2IxZTg4MmEwOSIsIm5iZiI6MTcyOTc2MTUyNy43MDAxODIsInN1YiI6IjYzODYxMDEwNWVkOGU5MDBjYTcyMjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AtwmLMX6seTRphkTB2xHiUBZcJuq0CCQv-nRsuk81g8'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
 

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={clickHandler} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" allowFullScreen="allowfullscreen" width="90%" height="90%" frameBorder="0"></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
