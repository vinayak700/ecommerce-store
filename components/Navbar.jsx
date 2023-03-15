import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart, Search } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'><span style={{ color: 'red', cursor: 'pointer' }}>VG&apos;S<span style={{ color: 'purple' }}>HEADPHONES</span></span></Link>
      </p>
      <Search />
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQty}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar