import React from 'react'
import AboutBoard from '../assets/AboutBoard.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${AboutBoard})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
  Welcome to CozysCharcutes, where we elevate the art of fine dining with our exquisite selection of charcuterie boards. Our passion for quality and craftsmanship shines through in every carefully curated board we create. At PedroTech Charcuterie, we believe that exceptional food starts with exceptional ingredients. 
  <br/>
  <br/>
  Our charcuterie boards feature a diverse array of premium meats, artisanal cheeses, fresh fruits, and gourmet accompaniments, all thoughtfully selected to tantalize your taste buds. Whether you're hosting an intimate gathering or a grand celebration, our beautifully arranged boards are perfect for any occasion.
  <br/>
  <br/>
  We take pride in sourcing locally and sustainably, ensuring that each ingredient not only delights your palate but also supports our community of farmers and producers. Our commitment to excellence extends beyond our products; we are dedicated to providing an unforgettable experience for every customer.
  <br/>
  <br/>
  Join us at CozysCharcutes and discover the perfect harmony of flavors and textures that our boards offer. Taste the artistry, savor the moments, and create lasting memories with our charcuterie creations.
    <br/>
    <br/>
  Come visit us today and let us help you turn any event into a culinary masterpiece!</p>
        </div>
    </div>
  )
}

export default About