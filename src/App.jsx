import React from 'react'
import Nav from './comps/Nav'
import Hero from './comps/Hero'
import About from './comps/About'
import Services from './comps/Services'
import Mywork from './comps/Mywork'
import Contact from './comps/Contact'
import Footer from './comps/Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App