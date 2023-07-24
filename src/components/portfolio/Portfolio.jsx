import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Apps2.jpg'
import IMG2 from '../../assets/game.jpg'
import IMG3 from '../../assets/game2.jpg'

const data = [
   {
    id: 1,
    image: IMG1,
    title: "LunchT: IOS Based App",
    github: "https://github.com/"
   },
   {
    id: 2,
    image: IMG2,
    title: "Haunted Forest Pygame",
    github: "https://github.com/"
   },
   {
    id: 3,
    image: IMG3,
    title: "Monster Chase Unity Game",
    github: "https://github.com/"
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