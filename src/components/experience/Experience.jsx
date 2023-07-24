import React from 'react'
import './experience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
          <div className='experience__development'>
            <h3>Frontend & Backend Development</h3>
            <div className='experience__content'>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>HTML</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>JavaScript</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>React</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>JavaFX</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>Unity</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>Java</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>Python</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>SQL</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>Swift</h4></div>
                </article>
            </div>

          </div>
          <div className='experience__IDEs'>
            <h3>Integrated Development Environments (IDEs)</h3>
            <div className='experience__content'>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>VSCode</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>IntelliJ IDEA</h4></div>
                </article>
                <article className='experience__details'>
                    <BiSolidBadgeCheck className='experience__details-icons'/>
                    <div><h4>Xcode</h4></div>
                </article>
                  
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience