import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/LunchT.png'
import IMG2 from '../../assets/HauntedForest.png'
import IMG3 from '../../assets/MonsterMadness.png'
import IMG4 from '../../assets/SwiftNotes.png'

const data = [
   {
    id: 1,
    image: IMG1,
    title: "LunchT: IOS Based App",
    github: "https://github.com/MZ-21/Swift-Projects"
   },
   {
    id: 2,
    image: IMG2,
    title: "Haunted Forest Pygame",
    github: "https://github.com/MZ-21/Python-Projects"
   },
   {
    id: 3,
    image: IMG3,
    title: "Monster Madness Unity Game",
    github: "https://github.com/MZ-21/Unity-Projects"
   },
   {
    id: 4,
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