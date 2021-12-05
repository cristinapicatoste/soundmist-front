import React, { useContext, useEffect, useState } from 'react';
import { ExampleContext } from '../../context/contextProvider';
import { exampleActions } from '../../reducers/exampleReducer';

const Count = () => {
  const { state, dispatch } = useContext(ExampleContext);

  useEffect(() => {
    console.log(state.price);
  }, []);

  return (
    <div>
      <h1>Contador</h1>
      <input
        type="text"
        onChange={(e) => dispatch({ type: exampleActions.SET_PRICE, data: e.target.value })}
      />
      <p>{state.price}</p>
    </div>
  );
};

export default Count;
