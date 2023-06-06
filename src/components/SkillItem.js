import React from "react";
import { useNavigate } from 'react-router-dom'

function SkillItem({image}) {
    const navigate = useNavigate()
    return( 
    <div className="skillItem"> 
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
    </div>
    );
}

export default SkillItem;
