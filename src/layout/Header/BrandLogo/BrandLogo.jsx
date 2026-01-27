import Logo from '../../../assets/logo.png';
import styles from '../Header.module.css';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
    return (
        <>
            <Link to="/" className={styles.brand}>
                <img src={Logo} alt="Roxboro Medical Office logo" className={styles['brand__logo']} />
            </Link>
        </>
    )
}

export default BrandLogo;