import React, { createContext, useState } from 'react';
import { useExampleReducer } from '../reducers/exampleReducer';

export const ExampleContext = createContext();

export const ExampleContextProvider = ({ children }) => {
  const [state, dispatch] = useExampleReducer();

  return <ExampleContext.Provider value={{ state, dispatch }}>{children}</ExampleContext.Provider>;
};
