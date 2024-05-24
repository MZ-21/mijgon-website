import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/LunchT.png'
import IMG2 from '../../assets/HauntedForest.png'
import IMG3 from '../../assets/MonsterMadness.png'
import IMG4 from '../../assets/SwiftNotes.png'
import IMG5 from '../../assets/cheer_sm.png'
import IMG6 from '../../assets/piotr-makowski-27LH_0jXKYI-unsplash.jpg'
import IMG7 from '../../assets/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg'
import IMG8 from '../../assets/charlesdeluvio-6k4HkET8dPM-unsplash.jpg'
import IMG9 from '../../assets/heros.png'

const data = [
  {
    id: 1,
    image: IMG5,
    title: "Cheer: Website",
    github: "https://github.com/MZ-21/Cheer-Website.git"
   },
   {
    id: 2,
    image: IMG6,
    title: "Chess Game: Console Based",
    github: "https://github.com/MZ-21/Chess-Game.git"
   },
   {
    id: 3,
    image: IMG7,
    title: "Library Database",
    github: "https://github.com/MZ-21/Library-DB.git"
   },
   {
    id: 4,
    image: IMG8,
    title: "Lyric-Lens",
    github: "https://github.com/MZ-21/Lyric-Lens.git"
   },
   {
    id: 5,
    image: IMG9,
    title: "Superhero search",
    github: "https://github.com/MZ-21/Superhero-Search.git"
   },
   {
    id: 6,
    image: IMG1,
    title: "LunchT: IOS Based App",
    github: "https://github.com/MZ-21/Swift-Projects"
   },
   {
    id: 7,
    image: IMG2,
    title: "Haunted Forest Pygame",
    github: "https://github.com/MZ-21/Python-Projects"
   },
   {
    id: 8,
    image: IMG3,
    title: "Monster Madness Unity Game",
    github: "https://github.com/MZ-21/Unity-Projects"
   },
   {
    id: 9,
    image: IMG4,
    title: "SwiftNotes: Simple Note Platform",
    github: "https://github.com/MZ-21/JavaScript-Projects"
   }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id,image,title,github}) => {
            return(
              <article key ={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
          
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                </div>
              </article>
            )
        })}
      </div>
    
    </section>
  )
}

export default Portfolio