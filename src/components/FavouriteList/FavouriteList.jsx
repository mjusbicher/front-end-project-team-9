import React from "react";
import ItemList from "../MainContent/ItemList";
import { getFavourite } from "../utils/favorites"
import styles from "../MainContent/MainContent.module.css"

const FavouriteList = () => {

  const favourites = getFavourite()

  return(
    <div className={styles.cards}>
      <ItemList data={favourites} />
    </div>
  )
};

export default FavouriteList;
