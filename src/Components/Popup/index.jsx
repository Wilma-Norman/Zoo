import React from 'react';
import styles from './popup.module.css';

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.wraper}>
      <div className={styles.content}>
        <div className={styles.imageWraper}>
        <img src={content.image} alt={content.header} className={styles.animalImage} />
        <span className={styles.closeButton} onClick={onClose}>
         &times; 
        </span>
        <h2 className={styles.imageHeader}>{content.header}</h2>
        </div>
        <div className={styles.textWraper}>
            <p>Life span: {content.lifeSpan}</p>
            <p>Food: {content.food}</p>
            <p>{content.description}</p>
            <p>Leanght: {content.length}</p>
            <p>Weight: {content.weight}</p>
            <p>Found: {content.found}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
