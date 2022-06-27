import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const { categoryId } = useParams();

  const filterProducts = productos.filter(function productosFiltrados(cat) {
    if (cat.category === categoryId) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterProducts);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductos(res.data));
    console.log(productos);
  }, []);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${categoryId}`)
      .then((res) => setCategories(res));
    console.log(categories);
  }, [categoryId]);
  console.log(categories);

  return (
    <div>
      <h1>ItemListContainer</h1>
      <ItemList productos={productos} categories={filterProducts} filterProducts={filterProducts} />
    </div>
  );
};

export default ItemListContainer;
