import BrandLogo from './BrandLogo/BrandLogo';
import Navigation from "./Nav/Navigation";
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {    
   const [isMobileNav, setIsMobileNav] = useState(false);
   const hamburgerMenuHandler = () => {   
    setIsMobileNav((prev)=> !prev)
   }   
    return (        
        <>
        {/* Site header starts here. */}
        <header className={styles['site-header']}>
            <div className="container grid grid-center grid-cols-1fr-auto">
                <BrandLogo />
                <div>
                    {/*Mobile menu button*/}
                    <button className={styles['nav-toggle']} 
                        aria-expanded= {isMobileNav} 
                        aria-controls="primary-nav"
                        onClick={hamburgerMenuHandler}
                    >
                        <span className="visually-hidden">Menu</span>
                        <span className={styles['nav-toggle__bar']}></span>
                        <span className={styles['nav-toggle__bar']}></span>
                        <span className={styles['nav-toggle__bar']}></span>
                    </button>                    
                    <Navigation isOpen={isMobileNav} />                
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;
