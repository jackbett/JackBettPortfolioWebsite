import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import UbIcon from "../helpers/UB.js";
import "../styles/Experience.css"

import { ECBO, EMH, TDPEMH } from '../components/MuiChip.js'

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2015 - 2019'
                    iconStyle={{ background: "#3e497a", colo: "#fff" }}
                    icon={<UbIcon />}
                >
                    <h3 className='verical-timeline-element-title'>
                        University at Buffalo<br />
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>Buffalo, NY</h4>
                    <p>Bachelors of Science in Computer Science</p>

                    <p>Data Intensive Computing Certificate</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='August 2020 - August 2022'
                    iconStyle={{ background: "#e9d35b", colo: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <ECBO />
                    <h3 className='verical-timeline-element-title'>
                        M&T Bank, Technology Development Program
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Buffalo, NY
                    </h4>
                    <p>Year 1</p>
                    <p>Enterprise Cloud Business Office</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='August 2020 - August 2022'
                    iconStyle={{ background: "#e9d35b", colo: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <TDPEMH />
                    <h3 className='verical-timeline-element-title'>
                        M&T Bank, Technology Development Program
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Buffalo, NY
                    </h4>
                    <p>Year 2</p>
                    <p>Enterprise Messaging Hub</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='August 2022 - Present'
                    iconStyle={{ background: "#e9d35b", colo: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <EMH />
                    <h3 className='verical-timeline-element-title'>
                        M&T Bank - Enterprise Messaging Hub
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Buffalo, NY
                    </h4>
                    <p>Enterprise Messaging Hub</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default Experience