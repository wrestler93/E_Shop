import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import { useDispatch, useSelector } from "react-redux";
import { DataRecord } from "../actions";

function Subtotal() {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);
  const [itemSubTotal, setItemSubTotal] = useState(0);
  const [itemSubData, setItemSubData] = useState([]);

  const { itemTotal, ItemSum, ItemCount } = useSelector((state) => ({
    itemTotal: state.searchTheEmail.CartData,
    ItemSum: state.searchTheEmail.countSum,
    ItemCount: state.searchTheEmail.countNum,
  }));
  console.log("eee", itemTotal);

  // useEffect(() => {
  //   let totalCount = itemTotal.length;
  //   setItemCount(totalCount);

  //   let result = itemTotal.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  //   setItemSubTotal(result);
  //   console.log(result);
  // }, [itemTotal]);

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal (<b>{ItemCount}</b> items): <strong>₹ {ItemSum}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
