import React from "react";
import { Card } from "react-bootstrap";
import styles from "./MediaCardDetail.module.css"
import {Button} from "react-bootstrap";
import { addFavourite, favouriteExists, removeFavourite} from "../utils/favorites";


const ItemDetail = ({ data }) => {

  const elementExists = favouriteExists(data);

  const addItem = () => {
    addFavourite(data)
  };

  const removeItem = () => {
    removeFavourite(data)
  } 

  return (
    <>
      <Card className={[styles.cardDetail, styles.cardDetailMobile]} style={{backgroundColor: "black"}}>
      <Card.Img className={styles.cardDetailImg} src={data.cover} alt="Card image" />
        <div className={styles.cardDetailText}>
          <h1>{data.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum sequi, fugiat tempora, eveniet adipisci quia ut rerum numquam ipsam in ea perferendis suscipit sunt doloribus, ad repellat officiis ducimus?
          </p>
          <Button onClick={() => {elementExists ? removeItem() : addItem()}} style={{background: '#e50914', borderColor: '#e50914'}}>
            {!!elementExists ? 'Remover de Favoritos' : 'Añadir a Favoritos'} 
          </Button>
        </div>
    </Card>
    </>
  );
};

export default ItemDetail;
