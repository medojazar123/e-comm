import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import Routes
import { useSelector } from "react-redux";

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import ShipppingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";

import logo from "./Images/logo.png";

function App() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const openmenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };
    const closemenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openmenu}>&#9776;</button>
                        <Link to="/">
                            Origami
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
                    <div className="header-links">
                        <span>
                            <Link to="/cart">
                                <span class="material-icons">
                                    shopping_cart
                                </span>
                            </Link>
                        </span>
                        <span>
                            {userInfo ? (
                                <Link to="/profile">{userInfo.name}</Link>
                            ) : (
                                <Link to="/signin">
                                    <span class="material-icons">login</span>
                                </Link>
                            )}
                        </span>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Categories</h3>
                    <button
                        className="sidebar-close-button"
                        onClick={closemenu}
                    >
                        <span class="material-icons">arrow_back_ios</span>
                    </button>
                    <ul>
                        <li>
                            <a href="index.html">Mens</a>
                        </li>
                        <li>
                            <a href="index.html">Women</a>
                        </li>
                        <li>
                            <a href="index.html">Unisex</a>
                        </li>
                        <li>
                            <a href="index.html">Children</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Routes>
                            <Route path="/products" element={<ProductsScreen />} />
                            <Route path="/shipping" element={<ShipppingScreen />} />
                            <Route path="/payment" element={<PaymentScreen />} />
                            <Route path="/placeorder" element={<PlaceOrderScreen />} />
                            <Route path="/signin" element={<SigninScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/product/:id" element={<ProductScreen />} />
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/cart/:id?" element={<CartScreen />} />
                        </Routes>
                    </div>
                </main>
                <footer className="footer">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;