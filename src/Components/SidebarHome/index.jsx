import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebarHome.module.css';

const sidebarOptions = {
  Mammals: ["Echidna", "Quokka", "Tasmanian Devil"],
  Birds: ["Cassowary", "Yellow-tailed Black Cockatoo", "Kookaburra"],
  Reptiles: ["Frill-Necked Lizard", "Perentie", "Hawksbill Turtle"],
};

const SidebarHome = () => {
  return (
    <div className={styles.wraper}>
    <h3 className={styles.navText}>Navigate your self!</h3>
      <ul className={styles.ulWraper}>
        {Object.entries(sidebarOptions).map(([category, animals]) => (
          <li className={styles.listWraper} key={category}>
            <h3 className={styles.header}>{category}</h3>
            <ul className={styles.wraperText}>
              {animals.map((animal) => (
                <li className={styles.listText} key={animal}>
                  <Link className={styles.text} to={`/${category.toLowerCase()}`}>
                    {animal}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarHome;

