import React from "react";

const CandyContext=React.createContext({
    items:[],
    amount:0,
    addItem: (item) => {},
})

export default CandyContext;