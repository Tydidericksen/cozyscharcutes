import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <MusicNoteIcon />
        </div>
        <p> &copy; 2024 cozycharcutes.com</p>
    </div>
  )
}

export default footer