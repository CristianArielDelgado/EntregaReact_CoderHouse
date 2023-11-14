import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import styles from './itemListContainer.module.css';

export const ItemListContainer = ({ message }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((resp) => {
        if (category) {
          const productsFilter = resp.filter(product => product.category === category);
          setProducts(productsFilter);
          setIsLoading(false);
        } else {
          setProducts(resp);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div className={styles.container}>
      <h2>{message}</h2>
      {isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} />}
    </div>
  );
};

