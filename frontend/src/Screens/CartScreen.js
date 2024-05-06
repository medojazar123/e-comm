import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { Link } from "react-router-dom";

function CartScreen(props) {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match?.params?.id;
    
    // Fallback for props.location
    const search = props.location?.search || '';
    const qty = search ? Number(search.split("=")[1]) : 1;

    const dispatch = useDispatch();
    const removeFromCartHandler = productId => {
        dispatch(removeFromCart(productId));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]); 

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    };

    return (
        <div className="cart">
            {/* Rest of the component */}
        </div>
    );
}

export default CartScreen;