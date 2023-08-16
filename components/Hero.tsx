"use client"

import Image from 'next/image';
import { Button } from '.';


const Hero = () => {
  const handleScroll=()=>{

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Search and rent a car - fast and easy 
        </h1>

        <p className="her__subtitle">
          Make your car rental experience hassle free with our effortless booking process.
        </p>
        <Button title="Browse Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}/>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />  
          
        </div>          
        <div className="hero__image-overlay" />     
      </div>   
    </div>    
  )
}

export default Hero