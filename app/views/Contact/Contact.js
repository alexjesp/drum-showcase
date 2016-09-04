import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
      <form className='Contact-form'>
        <input className='Contact-input' type='text' placeholder='Name' />
        <input className='Contact-input' type='email' placeholder='Email' />
        <textarea className='Contact-input Contact-textbox' placeholder='Message' />
      </form>
    </div>
  )
}

export default Contact
