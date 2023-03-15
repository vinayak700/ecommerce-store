import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Product from './Product';

const Search = ({ product }) => {
    const [search, setSearch] = useState('');
    const [foundProducts, setFoundProducts] = useState([]);

    const handleSearchSubmit = async (e, product) => {
        e.preventDefault();
        console.log(product);
        const productsFound = product?.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
        setFoundProducts(productsFound);
    }

    return (
        <div className='search-product' >
            <form className="search" onSubmit={(e) => handleSearchSubmit(e, product)} >
                <div className="search-field">
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products" className='search-input' />
                </div>
                <button className='search-icon' type="submit">
                    <BsSearch />
                </button>
            </form>
            {foundProducts?.map((product) => (
                <Product
                    key={product._id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default Search