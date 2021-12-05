import React, { useEffect, useState } from 'react';

const withTax = (WrappedComponent, taxType) => {
  const [tax, setTax] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/tax/${taxType}`)
      .then((r) => r.json())
      .then((payload) => {
        setTax(payload);
      });
  }, []);

  return <WrappedComponent tax={tax} />;
};

export default withTax;
