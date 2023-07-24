import React from 'react'
import {IoLogoLinkedin} from 'react-icons/io'
import {VscGithub} from 'react-icons/vsc'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/mijgon-zekria-59a83925a/" target="_blank" rel='noreferrer'><IoLogoLinkedin/></a>
        <a href="https://github.com/MZ-21" target="_blank" rel='noreferrer'><VscGithub/></a>
        <a href="https://dribble.com" target="_blank" rel='noreferrer'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials