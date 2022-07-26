import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataById } from "../../data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [movie, setMovie] = useState([]);
  const { identificator } = useParams();

  useEffect(() => {
    dataById(identificator)
      .then((res) => {
        setMovie(res);
      })
      .catch((error) => console.log(error));
  }, [identificator]);

  return (
    <>
      <ItemDetail data={movie}/>
    </>
  );
}
export default ItemDetailContainer;
