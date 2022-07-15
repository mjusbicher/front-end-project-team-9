import React from "react";
import { Card } from "react-bootstrap";


const ItemDetail = ({ data }) => {
  return (
    <>
      <Card className="text-white" style={{backgroundColor: "black"}}>
      <Card.Img src={data.cover} alt="Card image" />
        <h1>{data.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum sequi, fugiat tempora, eveniet adipisci quia ut rerum numquam ipsam in ea perferendis suscipit sunt doloribus, ad repellat officiis ducimus?
        </p>
    </Card>
    </>
  );
};

export default ItemDetail;
