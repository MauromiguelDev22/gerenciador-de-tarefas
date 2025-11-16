import { FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook></FaFacebook>
            </li>
            <li>
                <FaInstagram></FaInstagram>
            </li>
            
           
        </ul>
         <span className={styles.copy_right}>GestProj</span> &copy; 2025
         
    </footer>
    )
}

export default Footer