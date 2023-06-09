import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQty } = useStateContext();
    useEffect(() => {
        setCartItems([]);
        setTotalPrice(0);
        setTotalQty(0);
        runFireworks();
        localStorage.clear();
    }, []);

    return (
        <div className='success-wrapper'>
            <div className="success">
                <p className="icon"><BsBagCheckFill /></p>
                <h2>Thank Your For Your Order!</h2>
                <p className="email-msg">Check your email inbox for the receipt.</p>
                <p className="description">If you have any questions, please email
                    <a href="mailto:order@example.com" className="email">
                        vinayakt890@gmail.com
                    </a>
                </p>
                <Link href='/'>
                    <button type='button' className='btn' width='300px'>Continue Shopping</button>
                </Link>
            </div>

        </div>
    )
}

export default Success
