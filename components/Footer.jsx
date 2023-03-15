import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
// import { Navigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 VG's Headphones All rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer

