import React from 'react'

const Article = ({image,date,text,read}) => {
  return (
    <div className='article-content'>
        <div className='article-content-image'>
            <img src={image} alt="" />
        </div>
        <div className='article-content-text'>
            <h4> {date} </h4>
            <h1> {text} </h1>
            <h4 className='h4-position'> {read} </h4>

        </div>

    </div>
  )
}

export default Article