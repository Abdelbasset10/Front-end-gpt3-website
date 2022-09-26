import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='Hero-Section' id='hero'>
      <div className='Hero-content'>
        <div className='Left-side'>
          <h1 className='gradient__text' > Let's Build Something amazing with GPT-3 OpenAi </h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='input-div'>
            <input type="email" placeholder='Email Adress' />
            <button type='button'>Get Started</button>
          </div>
          <div className='left-side-people'>
            <img src="/images/people.png" alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='Right-side'>
          <img src="/images/ai.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero