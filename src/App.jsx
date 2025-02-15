import React, { useEffect, useState } from 'react'
import Background from "./Components/Background/Background";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  let heroData = [
    {
      text1: "Dive into", text3:"What you love"
    },
    {
      text1: "Indulge", text3:"Your passions"
    },
    {
      text1: "Give in to ", text3:"Your passions"
    }
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{
        return(
          count === 2 ? 0 : count+1
        )
      })
    }, 3000);
  },[])

  return (
    <>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero 
    setPlayStatus={setPlayStatus} 
    heroData={heroData[heroCount]} 
    heroCount={heroCount} 
    setHeroCount={setHeroCount} 
    playStatus={playStatus}/>
    </>
  )
}

export default App