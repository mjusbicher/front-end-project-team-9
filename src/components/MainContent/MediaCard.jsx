import React from "react";
import { Card } from "react-bootstrap";
import styles from "./MediaCard.module.css";
import { useNavigate } from "react-router-dom";

const MediaCard = ({ item }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <>
      <Card
        className={styles.card}
        style={{ width: "18rem", cursor: "pointer" }}
        key={item.id}
        onClick={handleSubmit}
      >
        <div className={styles.overflow}>
          <Card.Img
            variant="top"
            src={item.image}
            className={styles.cardImage}
          />
        </div>
      </Card>
    </>
  );
};

export default MediaCard;
