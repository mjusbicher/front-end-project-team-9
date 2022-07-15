import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { traerData } from "../../data";
import ItemList from "./ItemList";
import styles from "./MainContent.module.css";

function ItemListContainer() {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    traerData(categoryId)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <div className={styles.cards}>
      <ItemList data={data} />
    </div>
  );
}
export default ItemListContainer;
