import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import UbIcon from "../assets/UB.png";
import MTB from "../assets/MTB.svg";
import MTBBlack from "../assets/MTBBlack.svg";
import WegmansIcon from "../assets/WegmansLogo.png";

import '../styles/Experience.css'

import { ECBO, EMH, TDPEMH, WEGMANS } from '../components/MuiChip.js'

function Experience() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Set this to false to animate the timeline elements each time they come into view
        threshold: 0.5, // Adjust this value as per your requirement
    });


    const controlsTitle = useAnimation();
const [titleRef, titleInView] = useInView({ triggerOnce: false });


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    useEffect(() => {
        if (titleInView) {
          controlsTitle.start('visible');
        } else {
          controlsTitle.start('hidden');
        }
      }, [controlsTitle, titleInView]);

    return (
        <div className='experience-pad'>
            <motion.div
            ref={titleRef}
            initial="hidden"
            animate={controlsTitle}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 }
            }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <h2 className="heading heading-sec heading-sec__mb-med">
                <span className="heading-sec__main">Experience</span>
                <span className="heading-sec__sub">
                    Here is my Education and Work experience
                </span>
            </h2>
            </motion.div>
            <div className='experience'>
                <VerticalTimeline lineColor="#eff2f7">
                    <VerticalTimelineElement
                        position={'left'}
                        className='vertical-timeline-element--education'
                        date='2015 - 2019'
                        iconStyle={{
                            background: "#3e497a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                        }}
                        icon={<img src={UbIcon} alt="University at Buffalo" className="timeline-icon" />}
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        intersectionObserverProps={{}}
                    >
                        <h3 className='verical-timeline-element-title'>
                            University at Buffalo<br />
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>Buffalo, NY</h4>
                        <p>Bachelors of Science in Computer Science <br></br> Data Intensive Computing Certificate</p>

                    </VerticalTimelineElement>
                </VerticalTimeline>
                <VerticalTimeline lineColor="#eff2f7">
                    <VerticalTimelineElement
                        position={'right'}
                        layout={'1-column-right'}
                        className='vertical-timeline-element--work-tech'
                        date='August 2020 - August 2021'
                        iconStyle={{
                            background: "#e0e622",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                        }}
                        icon={<img src={MTBBlack} alt="MTB" className="timeline-icon" />}
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        intersectionObserverProps={{}}
                    >
                        <h3 className='verical-timeline-element-title'>
                            M&T Bank, Enterprise Cloud Business Office
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>
                            Buffalo, NY
                        </h4>
                        <div className='timeline-content'>
                            <p>Year 1 - Technology Development Program</p>
                            <p>Enterprise Cloud Business Office - Bank initiative to migrate to Microsoft Azure Cloud infrastructure. Utilized IaC Azure Resource Manager 
                                Templates to quickly deploy cloud infrastructure and resources for the bank.</p>
                        </div>
                        <div className='chip-div'>
                            <ECBO />                 
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <VerticalTimeline lineColor="#3e497a">
                    <VerticalTimelineElement
                        position={'left'}
                        className='vertical-timeline-element--work-tech'
                        date='August 2021 - August 2022'
                        iconStyle={{
                            background: "#e0e622",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                        }}
                        icon={<img src={MTBBlack} alt="MTB" className="timeline-icon" />}
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        intersectionObserverProps={{}}
                    >
                        <h3 className='verical-timeline-element-title'>
                            M&T Bank - Enterprise Messaging Hub
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>
                            Buffalo, NY
                        </h4>
                        <p>Year 2 - Technology Development Program</p>
                        <p>Enterprise Messaging Hub - Migration of Corticon Business Rules Engine to open-source Drools microservices.</p>
                        <div className='chip-div'>
                            <TDPEMH />                    
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <VerticalTimeline lineColor="#3e497a">
                    <VerticalTimelineElement
                        position={'right'}
                        className='vertical-timeline-element--work'
                        date='August 2022 - May 2024'
                        iconStyle={{
                            background: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                        }}
                        icon={<img src={MTB} alt="MTB" className="timeline-icon" />}
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        intersectionObserverProps={{}}
                    >
                        <h3 className='verical-timeline-element-title'>
                            M&T Bank - Enterprise Messaging Hub
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>
                            Buffalo, NY
                        </h4>
                        <p>Migration of Messaging Hub from Tibco to Java Spring Boot microservices. Lead migration efforts setting best practices and standards
                            for microservices to interact seamlessly.</p>
                        <div className='chip-div'>
                            <EMH />
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <VerticalTimeline lineColor="#3e497a">
                    <VerticalTimelineElement
                        position={'left'}
                        className='vertical-timeline-element--work-wegs'
                        date='May 2024 - Present'
                        iconStyle={{
                            background: "#b850b1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                        }}
                        icon={<img src={WegmansIcon} alt="Wegmans" className="timeline-icon" />}
                        animate={controls}
                        initial="hidden"
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -100 },
                        }}
                        intersectionObserverProps={{}}
                    >
                        <h3 className='verical-timeline-element-title'>
                            Wegmans - Pricing and Promotions
                        </h3>
                        <h4 className='vertical-timeline-element-subtitle'>
                            Rochester, NY
                        </h4>
                        <p>Maintaining and reducing tech debt of Wegmans' Pricing and Promotion application. </p>
                        <div className='chip-div'>
                            <WEGMANS />
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;
