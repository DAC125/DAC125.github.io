import React from 'react'
import "./../../css/Sections.css"
import "./Home.css"
import Particle from '../../components/Particles/Particle'
import file from '../../assets/Diego_Acuna_Cerdas___Software_Engineer.pdf'

const Home = () => {

  
  return (
    <section id='home' className='section'>
     <Particle/>
     <div className='content'>
      <p className='ligthText'>HI, I'M DIEGO ACUÑA</p>
      <h1 className='text'>
        Web Developer
      </h1>
      <a className='colorButton dowloadCV' href={file} download>Download CV</a>
     </div>
    </section>
  )
}

export default Home