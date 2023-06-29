import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'> 
            <LinkedInIcon /> 
            <EmailIcon /> 
        </div>
        <div>
            <p> &copy; 2023 Jack Bett</p>
        </div>
    </div>
  )
}

export default Footer