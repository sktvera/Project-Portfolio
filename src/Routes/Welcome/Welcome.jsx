import React from 'react'
import { Banner } from '../../Components/Banner/Banner'
import { Skills } from '../../Components/Skills/Skills'
import { Projects } from '../../Components/Projects/Projects'
import { Contact } from '../../Components/Contact'
import { Footer } from '../../Components/Footer'

const Welcome = () => {
  return (
    <div>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Welcome