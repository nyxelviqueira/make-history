import React, { useState, useEffect } from "react";
import "../components/styles/card.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({
  title,
  category,
  date,
  description,
  inHand,
  draggable,
  id,
  showBack,
}) {
  const [showFront] = useState(inHand);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleModalClose = () => {
    setShowModal(false);
  };

  //Función para cargar la imagen y cargar una random si no está disponible.
  const cargarImagen = (path) => {
    const images = require.context("../assets/images", true);
    try {
      return images(`./${path}`);
    } catch (error) {
      return images("./random.jpg");
    }
  };

  // Función para formatear los años A.C.
  const formatYear = (year) => {
    const absoluteYear = Math.abs(year);
    if (year < 0) {
      return `${absoluteYear} A.C.`;
    } else {
      return absoluteYear;
    }
  };

  const handleCardClick = () => {
    if (!draggable) {
      setShowModal(true);
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Formateamos la fecha utilizando la función formatYear
  const formattedYear = formatYear(parseInt(date));

  return (
    <>
      <div className="card">
        {showBack ? (
          <div className="card-front" onClick={handleCardClick}>
            <img src={cargarImagen(`${id}.jpg`)} alt={title} />
            <div className="card-front-container">
              <h2>{formattedYear}</h2>
              <h3>{title}</h3>
              <h6>Ver más</h6>
            </div>
          </div>
        ) : (
          <div className="card-back">
            <div className="card-back-image">
              <div className="card-back-container">
                <h2>{title}</h2>
                <h3>{category}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <div className="card-modal-overlay" onClick={handleModalClose}>
          <div className="card-modal" onClick={handleContentClick}>
            <span className="card-modal-close" onClick={handleModalClose}>
              &times;
            </span>
            <img src={cargarImagen(`${id}.jpg`)} alt={title} />
            <div className="card-modal-content">
              <h2>{formattedYear}</h2>
              <div className="card-modal-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
