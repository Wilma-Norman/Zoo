import { Link } from 'react-router-dom';
import styles from './Nav.module.css'; 
import React from 'react';

const Navigation = ({ activeCategory,setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(category); 
  };

  function LinkConstructor(name, href){
    this.name = name;
    this.href = href;
    this.className = [styles.animal, activeCategory == this.name ? styles['animal-active']: ''].join(' ')
  }

  const links = [
  new LinkConstructor('Home', '/'), 
  new LinkConstructor('Mammals','/mammals'),
  new LinkConstructor('Birds', '/birds'),
  new LinkConstructor('Reptiles','/reptiles')
  ]

  return (
    <nav className={styles.wraper}>
        {links.map((link, i)=>(
          <Link className={link.className} to={link.href} onClick={()=> handleCategoryClick(link.name)} key={i}>{link.name}</Link>
        ))}
    </nav>
  );
};

export default Navigation;