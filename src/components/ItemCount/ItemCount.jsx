import { Button } from "@mui/material";
import React, { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const handleAumentar = () => {
    const value = count + 1;
    setCount(value);
  };
  const handleRestar = () => {
    if (count > 0) {
      const value = count - 1;
      setCount(value);
    }
  };
  return (
    <div>
      <div>
        <Button onClick={handleAumentar} type="primary" danger>
          +
        </Button>
        <Button onClick={handleRestar} danger>
          -
        </Button>
      </div>
      <div>
        <h3>Cantidad:{count}</h3>
      </div>
    </div>
  );
};

export default ItemCount;
