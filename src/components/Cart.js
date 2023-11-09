import Modal from "./Modal";
import React from "react";

const Cart=props=>{
    const cartItems=(
        <ul>
      {props.list.map((item) => (
        <li key={Math.random()}>{item.name}
        {console.log(props.list)}</li>
      ))}
    </ul>
  );
  return(
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Amount</span>
            <button onClick={props.onClose}>Close</button>
        </div>
    </Modal>
  )
}

export default Cart;