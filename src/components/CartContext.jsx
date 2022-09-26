import React from "react";
import { useState } from "react";
import { useContext } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
            }));
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }}

    const totalPrice = () =>{
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad * productoActual.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

        return (
            <CartContext.Provider value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                cart
            }} >
                {children}
            </CartContext.Provider>
        )
    };

    export default CartProvider;