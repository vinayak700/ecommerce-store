import React, { useState, useEffect, useContext, createContext } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        // Here product_.id is id of item we are trying to add
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQty((prevTotalQty) => prevTotalQty + quantity)

        // If item already exists in the cart
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                }
            })
            setCartItems(updatedCartItems);
        }
        else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQty((prevTotalQty) => prevTotalQty - foundProduct.quantity);
        setCartItems(newCartItems);
    }
    const toggleCartItemQuantity = (id, value) => {
        // item._id = cartItems id 
        // id = the id of a cart item we are looking for an update
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        // Keeping all cart-items besides the one we are currently updating
        const newCartItems = cartItems.filter((item) => item._id !== id);

        if (value === 'inc') {
            // foundProduct is the exact product to which we are trying to update
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQty((prevTotalQty) => prevTotalQty + 1);
        }
        else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQty((prevTotalQty) => prevTotalQty - 1);
            }
        }
    }
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }
    return (
        // passing values of objects across entire application
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQty,
            qty,
            incQty,
            decQty,
            onAdd,
            onRemove,
            setShowCart,
            toggleCartItemQuantity,
            setCartItems,
            setTotalPrice,
            setTotalQty
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);