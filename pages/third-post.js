import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

/*
.rotate{
  transform:rotate(90deg);
  transform: translate(-20px,0px);
}
        <embed src="/images/duvet.mp3" autostart="true"></embed>

*/
export default function ThirdPost() {
    return (
      <div>
        <Head>
          <title>Third Post</title>
        </Head>
        <h1 className={styles.container}>
          shenanigans
        </h1>

        <div className={styles.align}>
            <img src="/images/gif1.gif" className={styles.images}  ></img>
            <img src="/images/gif8.gif" className={styles.images} ></img>
            <img src="/images/gif9.gif" className={styles.images}  ></img>
            <img src="/images/gif10.gif" className={styles.images}  ></img>
            <img src="/images/gif11.gif" className={styles.images}  ></img>
            <img src="/images/gif12k.gif" className={styles.images}  ></img>
            <img src="/images/gif13.gif" className={styles.images}  ></img>
            <img src="/images/gif14.gif" className={styles.images}  ></img>
            <img src="/images/gif15.gif" className={styles.images}  ></img>
            <img src="/images/gif16.gif" className={styles.images}  ></img>
            <img src="/images/gif17.gif" className={styles.images}  ></img>
            <img src="/images/gif18.gif" className={styles.images}  ></img>
            <img src="/images/gif19.gif" className={styles.images}  ></img>
            <img src="/images/gif20.gif" className={styles.images}  ></img>
            <img src="/images/gif21.gif" className={styles.images}  ></img>
            <img src="/images/gif23k.gif" className={styles.images}  ></img>
            <img src="/images/gif24.gif" className={styles.images}  ></img>
            <img src="/images/gif25.gif" className={styles.images}  ></img>

        </div>

        <div align="center">
        <Link href="/first-post"><button className = {`${styles.allBtns} ${styles.wbutton}`}>⬅️⬅️</button></Link>
          <Link href="/second-post"><button className = {`${styles.allBtns} ${styles.wbutton}`}>⬅️</button></Link>
          <Link href="/"><button className = {`${styles.allBtns} ${styles.wbutton}`}>🏡</button></Link>
          
        </div>
  
      </div>
    );
  }