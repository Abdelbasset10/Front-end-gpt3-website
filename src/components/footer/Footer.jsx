import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-content'>
            <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            <div className='btn-footer'>
                <button>Request Early Access</button>
            </div>
        <div className='footer-contnet-flex-links'>
            <div className='footer-content-flex-links-1'>
                <img src="/images/logo.svg" alt="" />
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className='footer-content-flex-links-2'>
                <h3>Links</h3>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className='footer-content-flex-links-3'>
                <h3>Company</h3>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className='footer-content-flex-links-4'>
                <h3>Get in touch</h3>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>

        </div>
        <div className='footer-copy-right'>
            <p>© 2021 GPT-3. All rights reserved.</p>

        </div>
     </div>
     </div>
   
  )
}

export default Footer