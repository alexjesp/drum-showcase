import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
      <form className='Contact-form'>
        <div className='Contact-formOverlay'>Coming soon</div>
        <input className='Contact-input' type='text' placeholder='Name' />
        <input className='Contact-input' type='email' placeholder='Email' />
        <textarea className='Contact-input Contact-textbox' placeholder='Message' />
        <div className='Contact-footer'>
          <input className='Contact-submit Contact-input' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default Contact
