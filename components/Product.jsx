import React, { useState } from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import Image from 'next/image'

const Product = ({ product: { image, name, slug, price } }) => {

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image
            src={urlFor(image && image[0])}
            alt='card_image'
            width={250}
            height={250}
            className='product-image' />
          <div className='product-name'>{name}</div>
          <div className='product-name'>₹{price}</div>
        </div>
      </Link>
    </div>
  )
}

export default Product