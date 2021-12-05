import React, { useState } from 'react';
import withTax from './withTax';

const Product = (props) => {
  const [price, setPrice] = useState(0);

  const { tax } = props;

  return (
    <div>
      <input type="number" onChange={(e) => setPrice(e.target.value)} />
      <p>{price}</p>
    </div>
  );
};

export default withTax(Product, 'FOOD');
