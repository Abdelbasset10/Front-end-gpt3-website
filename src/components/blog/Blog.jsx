import React from 'react'
import Article from './Article'
import './blog.css'
const Blog = () => {
  return (
    <div className='blog-section' id="blog" >
        <div className='blog-content'>
            <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
            <div className='blog-content-articles'>
              <div className='blog-content-article-left-side'>
                <Article image="/images/blog01.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
              </div>
              <div className='blog-content-article-right-side'>
                <Article image="/images/blog02.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"  />
                <Article image="/images/blog03.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article"  />
                <Article  image="/images/blog04.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
                <Article  image="/images/blog05.png" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
              </div>

            </div>

        </div>

    </div>
  )
}

export default Blog