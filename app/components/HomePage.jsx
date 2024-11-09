import React from 'react';
import Link from 'next/link';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>Your one-stop shop for grooming services</p>
      </header>

      <div className={styles.buttonContainer}>
        <Link href="/register">
          <span className={styles.button}>Register</span>
        </Link>
        <Link href="/login">
          <span className={styles.button}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
