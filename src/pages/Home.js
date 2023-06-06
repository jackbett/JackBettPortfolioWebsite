import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"
import JackImg from '../assets/JackPic.JPG'
import { SkillsList } from '../helpers/SkillsList'
import SkillItem from '../components/SkillItem'

function Home() {
  return (
    <div className = 'home'>
        <div className='about'>
            <div className="left">
                <div className="imgContainer">
                    <img src={JackImg} alt="" />
                </div>
            </div>
            <div className="right">
                <h2> Hi, My Name is Jack</h2>
                <div className='prompt'> 
                    <p>
                        A software engineer
                    </p>
                    <LinkedInIcon />
                    <EmailIcon />
                </div>
            </div>
        </div>
        <div className='skills'>
            <h1> Skills</h1>
            {SkillsList.map((skill) => {
            return <SkillItem image ={skill.image}/>
        })}
        </div>

    </div>
  )
}

export default Home