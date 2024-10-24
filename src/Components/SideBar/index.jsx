import styles from './sidebar.module.css'; 

const Sidebar = ({ category }) => {
  const sidebarOptions = {
    Mammals: ["Echidna", "Quokka", "Tasmanian Devil"],
    Birds: ["Cassowary", "Yellow-tailed Black Cockatoo", "Kookaburra"],
    Reptiles: ["Frill-Necked Lizard", "Parentie", "Hawksbill Turtle"],
  };

  const handleScroll = (animal) => {
    const section = document.getElementById(animal.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidenames}>
        {sidebarOptions[category].map((option) => (
          <li
            className={styles.linkname}
            key={option}
            onClick={() => handleScroll(option)} 
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;