import React from "react";
import MediaCard from "./MediaCard";

const ItemList = ({data}) => {
    return(
        data.map(item => (
            <MediaCard
            key={item.id}
            item={item}/>
        ))
    )
}

export default ItemList;