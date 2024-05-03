import React from 'react';

export const CartContext = React.createContext({
  totalPrice: 0,
  setTotalPrice: (value: number) => {},
});