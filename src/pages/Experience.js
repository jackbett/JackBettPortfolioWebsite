import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import UbIcon from "../helpers/UB.js";
import '../styles/Experience.css'


import { ECBO, EMH, TDPEMH } from '../components/MuiChip.js'

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    position={ 'left' }
                    className='vertical-timeline-element--education'
                    date='2015 - 2019'
                    iconStyle={{ background: "#3e497a", color: "#fff", display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Add display, alignItems, and justifyContent properties
                    icon={<UbIcon style={{ width: '100%', height: '100%' }} />} // Adjust the size of the icon
                  >
                    <h3 className='verical-timeline-element-title'>
                        University at Buffalo<br />
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>Buffalo, NY</h4>
                    <p>Bachelors of Science in Computer Science <br></br> Data Intensive Computing Certificate</p>
                 
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    position={ 'right' }
                    layout={ '1-column-right' }
                    className='vertical-timeline-element--work'
                    date='August 2020 - August 2022'
                    iconStyle={{ background: "#e9d35b", colo: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='verical-timeline-element-title'>
                        M&T Bank, Enterprise Cloud Business Office
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Buffalo, NY
                    </h4>
                    <p>Year 1 - Technology Development Program</p>
                    <p>Enterprise Cloud Business Office - Bank initiative to migrate to Microsoft Azure Cloud infrastructure. Utilized IaC Azure Resource Manager 
                        Templates to quicky deploy cloud infrastructre and resources for the bank.</p>

                    <div className='chip-div'>
                        <ECBO />                 
                    </div>

                
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    position={ 'left' }
                    className='vertical-timeline-element--work'
                    date='August 2020 - August 2022'
                    iconStyle={{ background: "#e9d35b", colo: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='verical-timeline-element-title'>
                        M&T Bank - Enterprise Cloud Business Office
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Buffalo, NY
                    </h4>
                    <p>Year 2 - Technology Development Program</p>
                    <p>Enterprise Messaging Hub - Migration of Corticon Business Rules Engine to opensource Drools microservices.</p>
                    
                    <div className='chip-div'>
                    <TDPEMH />                    
                    </div>

                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    position={ 'right' }
                    className='vertical-timeline-element--work'
                    date='August 2022 - Present'
                    iconStyle={{ background: "#e9d35b", colo: "#fff" }}
                    icon={<WorkIcon />}
                    
                >
            
                    <h3 className='verical-timeline-element-title'>
                        M&T Bank - Enterprise Messaging Hub
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Buffalo, NY
                    </h4>
                    <p> Migration of Messaging Hub from Tibco to Java Spring Boot microservices. Lead migration efforts setting best practices and standards
                        for microservices to interact seemlessly.</p>
                    <div className='chip-div'>
                        <EMH />
                    </div>
                        
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default Experience