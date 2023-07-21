import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';



export default function FirstPost() {
  return (
    <div >
      <Head>
        <title className={styles.container}>First Post</title>
      </Head>
      <h1 className={styles.container} >
        school stuff + random! RAAAH
      </h1>
      <div>
      <img src="/images/gif27.gif" className={styles.images}  ></img>
      <img src="/images/gif28.gif" className={styles.images}  ></img>
      <img src="/images/gif29.gif" className={styles.images}  ></img>
      <img src="/images/gif26k.gif" className={styles.images}  ></img>
      <img src="/images/gif30.gif" className={styles.images}  ></img>
      <img src="/images/gif31.gif" className={styles.images}  ></img>
      <img src="/images/gif32.gif" className={styles.images}  ></img>
      <img src="/images/gif33.gif" className={styles.images}  ></img>
      <img src="/images/gif34.gif" className={styles.images}  ></img>
      <img src="/images/gif36.gif" className={styles.images}  ></img>
      <img src="/images/gif35.gif" className={styles.images}  ></img>
      <img src="/images/gif37.gif" className={styles.images}  ></img>


      </div>
      <div align="center">
        <Link href="/"><button className = {`${styles.allBtns} ${styles.wbutton}`}>🏡</button></Link>
        <Link href="/second-post"><button className = {`${styles.allBtns} ${styles.wbutton}`}>➡️</button></Link>
        <Link href="/third-post"><button className = {`${styles.allBtns} ${styles.wbutton}`}>➡️➡️</button></Link>
      </div>
      
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>

    </div>
  );
}