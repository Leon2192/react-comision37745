import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";

const ItemCount = () => {
  const { counts, handleAumentar, handleRestar } = useContext(CartContext);
  return (
    <div>
      <div>
        <Button
          variant="outlined"
          onClick={handleAumentar}
          type="primary"
          danger
        >
          +
        </Button>
        <Button variant="contained" onClick={handleRestar} danger>
          -
        </Button>
      </div>
      <div>
        <h3>Cantidad:{counts}</h3>
      </div>
    </div>
  );
};

export default ItemCount;
