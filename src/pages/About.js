import React from 'react'
import AboutBoard from '../assets/AboutBoard.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${AboutBoard})`}}></div>
        <div className='aboutBottom'>
            <h1>About Me</h1>
            <p>
  Welcome to CozysCharcutes, where I elevate the art of fine dining with my exquisite selection of charcuterie boards. My passion for quality and craftsmanship shines through in every carefully curated board I create. At Cozy's Charcutes, I believe that exceptional food starts with exceptional ingredients. 
  <br/>
  <br/>
  My charcuterie boards feature a diverse array of premium meats, artisanal cheeses, fresh fruits, and gourmet accompaniments, all thoughtfully selected to tantalize your taste buds. Whether you're hosting an intimate gathering or a grand celebration, my beautifully arranged boards are perfect for any occasion.
  <br/>
  <br/>
  I take pride in sourcing locally and sustainably, ensuring that each ingredient not only delights your palate but also supports my community of farmers and producers. My commitment to excellence extends beyond my products; I am dedicated to providing an unforgettable experience for every customer.
  <br/>
  <br/>
  Join me at CozysCharcutes and discover the perfect harmony of flavors and textures that my boards offer. Taste the artistry, savor the moments, and create lasting memories with my charcuterie creations.
    <br/>
    <br/>
  Come visit me today and let me help you turn any event into a culinary masterpiece!</p>
        </div>
    </div>
  )
}

export default About
