import React, {useContext} from 'react';
import {ExampleContext} from "../../context/contextProvider";

const CountResetButton = () => {
  const { resetCount } = useContext(ExampleContext);
  return (
    <div>
      <input type="button" onClick={resetCount} value="Reset" />
    </div>
  );
};

export default CountResetButton;
