import React, { useContext } from 'react';
import { ExampleContext } from '../../context/contextProvider';

const CountButton = () => {
    const { sum } = useContext(ExampleContext);
    return (
        <div>
            <input type="button" onClick={sum} value="Count" />
        </div>
    );
};

export default CountButton;
