import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProductos(res.data))
    console.log(productos)
  }, [])
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer;
