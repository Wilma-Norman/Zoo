import styles from './infomamal.module.css'
import CassowaryInfo from './CassowaryInfo/CassowaryInfo'

const infoMammal = () => {
    return (
        <>
        <div className={styles.infomamal}>
            <h3>Welcome to Mammals page!</h3>
            <p>Click to read more!</p>
        </div>
        <CassowaryInfo />
        </>
    )
}

export default infoMammal