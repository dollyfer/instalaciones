import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="carrt">
      <Link to="/carrito">
        <HiOutlineShoppingCart></HiOutlineShoppingCart>
      </Link>
    </div>
  );
};

export default CartWidget;
