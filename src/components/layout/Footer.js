import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLink, FaLinkedin} from 'react-icons/fa'
import styles from "./Footer.module.css"
function Footer (){
return(

    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li className={styles.iconApp}>
            <Link to ="https://www.facebook.com/gabriel.magalhaes.180"> 
            <FaFacebook color="yellow"/></Link>
              
            </li>
            <li>
             
                <Link to ="https://www.instagram.com/gabrielmc35/"> 
            <FaInstagram color="yellow"/></Link>
            </li>
            <li>
              
                <Link to ="https://www.linkedin.com/in/gabrielmc35/"> 
            <FaLinkedin color="yellow"/></Link>
            </li>

        </ul>
        <p className={styles.copyright}>
            <span> Gabrielmc35 &copy; 2023</span> 
            </p>
    </footer>
)
}

export default Footer