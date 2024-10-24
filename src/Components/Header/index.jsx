import styles from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return(
        <div className={styles.wraper}>
            <header className={styles.headertag}>
            <h1 className={styles.header}>
                <a href="/" className={styles.header}>Zoo Animals</a>
            </h1>  
            <a href="/" className={styles.logoLink}>
                <img className={styles.logo} src={logo} alt="logo" />
            </a>           
            </header>            
        </div>
    )    
}

export default Header