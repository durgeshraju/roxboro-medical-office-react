import BrandLogo from './BrandLogo/BrandLogo';
import Navigation from "./Nav/Navigation";
import styles from './Header.module.css';
const Header = () => {
    return (        
        <>
        {/* Site header starts here. */}
        <header className={styles['site-header']}>
            <div className="container">
                <BrandLogo />
                Main site header container..
                <Navigation />
            </div>
        </header>
        </>
    )
}

export default Header;