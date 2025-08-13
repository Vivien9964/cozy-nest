import React from 'react'
import { Mail, GitBranch, Linkedin } from 'lucide-react'
import styles from './Home.module.css'

const Home = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText('mecserikvivien2@gmail.com');
    alert('Email copied to clipboard!');
  }


  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Welcome to Cozy Nest!</h1>
      <p className={styles.subtitle}>Take a look at my autumn-themed small projects, which I've built to practice and learn React!</p>

      <div className={styles.contact}>
        <p className={styles.contactTitle}>Feel free to reach out!</p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/vivien-mecerik-1260171b1/" className={styles.socialLink} title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Vivien9964" className={styles.socialLink} title="GitHub">
            <GitBranch size={20} />
          </a>
          <button onClick={copyEmail} className={styles.socialLink} title="Copy Email">
            <Mail size={20} />
          </button>
        </div>
      </div>
     
    </div>
  )
}

export default Home