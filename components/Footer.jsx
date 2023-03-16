import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 VG&apos;s Headphones All rights Reserved</p>
      <p className="icons">
        <Link href='https://google.com' target='_blank'>
          <AiFillInstagram />
        </Link>
        <Link href='https://twitter.com/vinayakt890' target='_blank'>
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer