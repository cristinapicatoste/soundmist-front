import { useReducer } from 'react';

const initialState = {
  price: 0,
  tax: 0,
  discount: 0,
  totalPrice: 0,
};

export const exampleActions = {
  SET_PRICE: 'SET_PRICE',
  SET_TAX: 'SET_TAX',
  SET_DISCOUNT: 'SET_DISCOUNT',
  SET_DATA: 'SET_DATA',
  CALCULATE_PRICE: 'CALCULATE_PRICE',
};

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case exampleActions.SET_PRICE:
      newState.price = action.data;
      return newState;
    case exampleActions.SET_TAX:
      newState.tax = action.tax;
      return newState;
    case exampleActions.SET_DISCOUNT:
      newState.discount = action.discount;
      return newState;
    case exampleActions.SET_DATA:
      newState.tax = action.tax;
      newState.price = action.price;
      newState.discount = action.discount;
      newState.totalPrice =
        action.price + action.price * action.tax - action.price * action.discount;
      return newState;
    case exampleActions.CALCULATE_PRICE:
      newState.totalPrice = state.price + state.price * state.tax - state.price * state.discount;
      return newState;
    default:
      return state;
  }
};

export const useExampleReducer = () => useReducer(reducer, initialState);
