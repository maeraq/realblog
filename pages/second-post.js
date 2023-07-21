import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';


export default function SecondPost() {
    return (
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1 className={styles.container}>
          the musical
        </h1>
        <img src="/images/gif2k.gif" className={styles.images}  ></img>
        <img src="/images/gif3.gif" className={styles.images}  ></img>
        <img src="/images/gif4.gif" className={styles.images}  ></img>
        <img src="/images/gif41.gif" className={styles.images}  ></img>
        <img src="/images/gif7.gif" className={styles.images}  ></img>
        <img src="/images/gif6.gif" className={styles.images}  ></img>
        <img src="/images/gif38k.gif" className={styles.images}  ></img>
        <img src="/images/gif39.gif" className={styles.images}  ></img>
        <img src="/images/gif40.gif" className={styles.images}  ></img>
        
        <div align="center">
          <Link href="/first-post"><button className = {`${styles.allBtns} ${styles.wbutton}`}>⬅️</button></Link>
          <Link href="/"><button className = {`${styles.allBtns} ${styles.wbutton}`}>🏡</button></Link>
          <Link href="/third-post"><button className = {`${styles.allBtns} ${styles.wbutton}`}>➡️</button></Link>
        </div>
  
      </div>
    );
  }