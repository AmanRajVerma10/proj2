import CandyContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    amount: 0
  };

  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedItems = state.items.concat(action.item);
      const tAmount=state.amount+action.amount;

      return {
        items: updatedItems,
        amount: tAmount
      };
    }
    return defaultCartState;
  };

const ContextProvider=(props)=>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (amount) => {
    dispatchCartAction({type: 'ADD', amount:amount});
  };

    const candyCart={
        items:cartState.items,
        amount: cartState.amount,
        addItem: addItemHandler
    }
    return(
        <CandyContext.Provider value={candyCart}>
            {props.children}
        </CandyContext.Provider>
    )
}

export default ContextProvider;