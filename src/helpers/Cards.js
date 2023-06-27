import React from 'react';
import "../styles/Cards.css"
import CardItem from '../components/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
  // src='images/img-9.jpg'
  text={
    <>
      <p>
      Hi I'm Jack, a CS graduate from the University at Buffalo. 
      I joined M&T's technology development program, 
      gaining experience in Azure Cloud and Java Spring Boot microservices. 
      As co-chair of the Technology Pillar, 
      I led a talented team to develop an internal website for PUB."      
      </p>
      <p>
      Outside of work, I explore novel technologies, enjoy hiking, photography, and videography. Crafting this website with React has been a rewarding experience. Check out my collection of adventure videos!
      </p>
    </>
  }
  // label='Adventure'
  // path='/services'
/>
            {/* <CardItem
              src='images/img-2.jpg'
              text = {<>
              <p>
        Beyond my professional endeavors, I find great pleasure in exploring and experimenting with novel technologies that pique my interest. Hiking, photography, and videography are among my favorite activities, serving as outlets for my creativity. I revel in the opportunity to venture into uncharted territories and craft unique perspectives through my creations. Constructing this personal website has been an immensely enjoyable experience, as I delved into the realm of React. I sincerely hope you find it engaging. Below, you'll find a collection of pictures I've captured during my hiking adventures.
      </p>
              </>
              }
              label='Luxury'
              // path='/services'
            /> */}
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              // path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              // path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              // path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
