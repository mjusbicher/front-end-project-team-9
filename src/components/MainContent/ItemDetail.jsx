import React, { useState }from "react";
import { Card } from "react-bootstrap";
import styles from "./MediaCardDetail.module.css"
import AddFavourite from "../AddFavourite/AddFavourite";


const ItemDetail = ({ data }) => {

  const [favourite, setFavourite] = useState();

  function handleFavourites(data) {
    const favouriteList = [...favourite, data];
    setFavourite(favouriteList);
  };

  console.log(favourite)

  return (
    <>
      <Card className={[styles.cardDetail, styles.cardDetailMobile]} style={{backgroundColor: "black"}}>
      <Card.Img className={styles.cardDetailImg} src={data.cover} alt="Card image" />
        <div className={styles.cardDetailText}>
          <h1>{data.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum sequi, fugiat tempora, eveniet adipisci quia ut rerum numquam ipsam in ea perferendis suscipit sunt doloribus, ad repellat officiis ducimus?
          </p>
          <AddFavourite onClick={() => handleFavourites()}/>
        </div>
    </Card>
    </>
  );
};

export default ItemDetail;
