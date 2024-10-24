import styles from '../global_categorys/category.module.css';
import React from 'react';
import { birdData } from '../../../DataCategoy/Birds/index'
import { useState } from 'react'
import Popup from '../../Popup/index.jsx'
import Sidebar from '../../SideBar/index.jsx';

const Birds = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [selectedContent, setSelectedContent] = useState(null)

  const openPopup = (content) => {
      setSelectedContent(content);
      setPopupOpen(true)
  }

  const closePopup = () => {
      setPopupOpen(false)
      setSelectedContent(null)
  }

return (
  <section className={styles.wraper}>
    <div className={styles.sidebarContainer}>
          <Sidebar category="Birds" />
        
  <div className={styles.container}>
    <h2 className={styles.group}>{birdData.title}</h2>
    <div>
      {birdData.content.map((item, index) => (
        <div className={styles.content} key={index} id={item.header.toLowerCase()}>
          <h3 className={styles.title}>{item.header}</h3>
          <div className={styles.wraperImage}>
          <img className={styles.image} src={item.image} alt={item.text}/>
            <div>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.text}>Food: {item.food}</p>
            </div>
          <button className={styles.buttonWraper}
          onClick={() => openPopup(item)}>{item.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  {selectedContent && (
      <Popup
      isOpen={popupOpen}
      onClose={closePopup}
      content={selectedContent}
      />
  )}
    </div>
  </section>
);
};

export default Birds;
