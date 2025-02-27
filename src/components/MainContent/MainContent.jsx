import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./MainContent.module.css";
import ItemList from "./ItemList";
import { traerData } from "../../data";

const MainContent = ({filter}) => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    traerData()
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if(data.length > 0){
      const filterData = data.filter((element) => element.name.toLowerCase().includes(filter.toLowerCase()));
      setDataFiltered(filterData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
  

  return (
    <>
    <div className={styles.carousel}>
      <Carousel fade={true} interval={5000} className={styles.carouselBorder}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.whats-on-netflix.com/wp-content/uploads/2022/04/most-popular-movies-on-netflix-in-2022.webp"
            alt="First slide"
            style={{borderRadius: "15px", maxHeight:"650px"}}
          />
          <Carousel.Caption>
            <h2>Mas populares</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.xtrafondos.com/descargar.php?id=3498&resolucion=1280x720"
            alt="Second slide"
            style={{borderRadius: "15px", maxHeight:"650px"}}
          />
          <Carousel.Caption>
            <h2>Nuevo lanzamiento</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://aztechin.com/wp-content/uploads/2022/05/DSB2-1280x720.jpg"
            alt="Third slide"
            style={{borderRadius: "15px", maxHeight:"650px"}}
          />
          <Carousel.Caption>
            <h2>Recomendado para ti</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-5383370.jpg"
            alt="Fourth slide"
            style={{borderRadius: "15px", maxHeight:"650px"}}
          />
          <Carousel.Caption>
            <h2>Próximamente</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/MZtj4qY.jpg"
            alt="Fifth slide"
            style={{borderRadius: "15px", maxHeight:"650px"}}
          />
          <Carousel.Caption>
            <h2>Continua viendo</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className={styles.cards}>
      <ItemList data={dataFiltered.length > 0 ? dataFiltered : data} />
    </div>
  </>
  );
};

export default MainContent;
