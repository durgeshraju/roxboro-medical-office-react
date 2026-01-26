import Logo from '../../../assets/logo.png';
import styles from '../Header.module.css';

const BrandLogo = () => {
    return (
        <>
            <img src={Logo} alt="Roxboro Medical Office logo" className={styles['brand__logo']} />
        </>
    )
}

export default BrandLogo;