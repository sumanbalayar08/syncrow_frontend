import React from "react";

const tableContext = React.createContext({
  lis1: [],
  lis2: [],
  lis3: [],
  totalAmount: 0,
  add: (items, index) => {},
  sub: (items, index) => {},
  sum: () => {},
});

export default CartContext;