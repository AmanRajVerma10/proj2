import React from "react";
import { useContext } from "react";
import CandyContext from "../store/cart-context";
const List = (props) => {
    const ctx=useContext(CandyContext);
    const buyOneHandler=(event)=>{
        event.preventDefault();
        ctx.addItem(1);
    }
    const buyTwoHandler=()=>{
        ctx.addItem(2);
    }
    const buyThreeHandler=()=>{
        ctx.addItem(3);
    }
  return (
    <div>
      <ul>
        {props.candies.map((candy) => (
          <li key={Math.random()}>
            {candy.name} {candy.description} {candy.price}
            <button onClick={buyOneHandler}>Buy 1</button>{" "}
            <button onClick={buyTwoHandler}>Buy 2</button>{" "}
            <button onClick={buyThreeHandler}>Buy 3</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
