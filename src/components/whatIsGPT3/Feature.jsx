import React from 'react'

const Feature = ({title,text}) => {
  return (
    <div className='feature-content'>
        <div className='feature-content-up-side'>
            <div />
            <h1> {title} </h1>
        </div>
        <div className='feature-content-down-side'>
            <p> {text} </p>
        </div>
        
        
        


    </div>
  )
}

export default Feature