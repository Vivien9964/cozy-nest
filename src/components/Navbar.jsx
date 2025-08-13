import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
        <nav className={styles.navbar}>
        <ul className={styles.navList}>
            <li className={styles.navItem}><Link to={'/'} className={styles.navLink}>Home</Link></li>
            <li className={styles.navItem}><Link to={'/moodboard'} className={styles.navLink}>Mood Board</Link></li>
            <li className={styles.navItem}><Link to={'/planner'} className={styles.navLink}>Bucket List</Link></li>
            <li className={styles.navItem}><Link to={'/recipes'} className={styles.navLink}>Fall Recipes</Link></li>
            <li className={styles.navItem}><Link to={'/countdown'} className={styles.navLink}>Events</Link></li>
        </ul>
        </nav>
    </header>
  )
}

export default Navbar