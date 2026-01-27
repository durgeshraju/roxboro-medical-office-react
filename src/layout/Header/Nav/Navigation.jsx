import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import styles from '../Header.module.css';

const Navigation = ({isOpen = false}) => {
    const navClasses = [
    styles.nav,
    isOpen ? styles['is-open'] : ''
    ].filter(Boolean).join(' ');
    
    return (
        <>
        <nav id="primary-nav" className={navClasses}>
            <ul className={styles.nav__list}>
                <li><Link className={styles.nav__link} to="/">Home</Link></li>
                <li><Link className={styles.nav__link} to="/gallery">Gallery</Link></li>                    
                <li><Link className={styles.nav__link} to="/about">About</Link></li>
                <li className="nav__cta">
                 <Button to="/contact" as={Link} rightIcon size="md">Contact Us</Button>
                </li>        
            </ul>      
        </nav>          
        </>
    )
}

export default Navigation;
