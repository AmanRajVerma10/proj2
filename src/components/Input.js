import React from "react";
import { useState } from "react";

const Input=props=>{
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onAdd(cname,description,price);
    }
    const[cname,setCname]=useState('');
    const changeName=(event)=>{
      setCname(event.target.value);
    }
    const[price,setPrice]=useState('');
    const changePrice=event=>{
      setPrice(event.target.value);
    }
    const[description,setDescription]=useState('');
    const changeDesc=event=>{
      setDescription(event.target.value);
    }
  
    return(
        <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Candy Name
          <input type="text" id="name" onChange={changeName}></input>
        </label>
        <label htmlFor="des">
          Description
          <input type="text" id="des" onChange={changeDesc}></input>
        </label>
        <label htmlFor="price">
          Price
          <input type="number" id="price" onChange={changePrice}></input>
        </label>
        <button>Add Candy</button>
      </form>
    </div>
    )
}

export default Input;