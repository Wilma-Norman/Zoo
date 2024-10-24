import styles from './Home.module.css'
import backgroundM from '../../assets/NavPic/tiger.png'
import backgroundR from '../../assets/NavPic/lizard.png'
import backgroundB from '../../assets/NavPic/parrot.png'
import { Link } from 'react-router-dom'
import SidebarHome from '../SidebarHome/index.jsx'


const Home = () => {
    return (
        <>
        <section className={styles.card}>
            <SidebarHome />
            <div className={styles.content}>
                <h3 className={styles.subText}>Welcome to Zoo Animals</h3>
                <p className={styles.text}>Explore the fascinating world of wildlife with our diverse collection of animals. Our site features three unique animal types, showcasing nine different species in total. Click on any animal to learn more about their habitats, behaviors, and fun facts. Whether you're passionate about mammals, reptiles, or birds, there's something here for everyone. Dive in and discover the wonders of nature at ZooAnimal.com!</p>
                <h3 className={styles.subtitle}>Get Started</h3>
                <div className={styles.navwraper}>
                    <div className={styles.navMammals}>
                    <Link to ='/mammals'>
                        <img src={backgroundM} alt="tiger" className={styles.navM} />
                        <div className={styles.textOverlay}>Mammals</div>
                    </Link>
                    </div>                
                    <div className={styles.navReptiles}>
                    <Link to='/reptiles'>
                        <img src={backgroundR} alt="lizards" className={styles.navR} />
                        <div className={styles.textOverlay}>Reptiles</div>
                    </Link>
                    </div>                    
                    <div className={styles.navBirds}>
                    <Link to='/birds'>
                        <img src={backgroundB} alt="birds" className={styles.navB} />
                        <div className={styles.textOverlay}>Birds</div>
                    </Link>
                    </div>
                </div>
             </div>
        </section>
        </>
    )
}

export default Home