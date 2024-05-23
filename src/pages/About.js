import React from 'react'
import AboutBoard from '../assets/AboutBoard.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${AboutBoard})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Here at PedroTech Pizzeria, we are dedicated to providing the best pizza in town. Our secret recipe has been passed down for generations, and we take pride in using only the freshest ingredients. We offer a wide variety of pizzas to suit every taste, from classic pepperoni to our signature PedroTech Special. Come visit us today and taste the difference!</p>
        </div>
    </div>
  )
}

export default About