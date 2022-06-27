import { Button } from "@mui/material";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ detail }) => {
  return (
    <div>
      <h1>{detail.title}</h1>
      <h2>{detail.price}</h2>
      <img src={detail.image} alt={detail.id} width={500} height={500} />
      <ItemCount />
      <Button>Add to cart</Button>
    </div>
  );
};

export default ItemDetail;
