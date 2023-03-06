import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartProduct.css";
import { removeData, DataRecord } from "../actions";

const CartProduct = () => {
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => ({
    cartItems: state.searchTheEmail.CartData,
  }));
  console.log(cartItems);

  const removeItem = (id) => {
    // const remove = cartItems.findIndex((obj) => obj.id === id);
    // cartItems.splice(remove, 1);
    // console.log(cartItems);
    // setCartData(cartItems);
    dispatch(removeData(id));
    dispatch(DataRecord(cartItems));
  };

  useEffect(() => {
    setCartData(cartItems);
    //dispatch(removeData(cartItems));
  }, [cartItems]);

  return (
    <div>
      {cartData?.map((item, index) => {
        return (
          <div className="checkoutProduct">
            <img src={item.image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <p className="checkoutProduct__price">
                <small> ₹ </small>
                <strong>{item.price}</strong>
              </p>
              <button onClick={() => removeItem(item.id)}>
                Remove from Basket
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProduct;
