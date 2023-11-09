import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import ContextProvider from "./store/ContextProvider";
import HeaderCartButton from "./components/HeaderCartButton";
import Cart from "./components/Cart"

function App() {
  const [candyList, setCandyList] = useState([]);
  const addCandyHandler = (cname, cdes, cprice) => {
    setCandyList((prevList) => {
      return [
        ...prevList,
        {
          name: cname,
          description: cdes,
          price: cprice
        },
      ];
    });
  };
  const[isViewed,setIsViewed]=useState(false);
  const closeCartHandler=()=>{
    setIsViewed(false);
  }
  const openCartHandler=()=>{
    setIsViewed(true);
  }

  return (
    <ContextProvider>
      <header>
        <Input onAdd={addCandyHandler}></Input>
        <HeaderCartButton showCart={openCartHandler}></HeaderCartButton>
        {isViewed && <Cart list={candyList} onClose={closeCartHandler}></Cart>}
      </header>
      <main>
      <List candies={candyList}></List>
      </main>
    </ContextProvider>
  );
}

export default App;
