import styles from "./homepage.module.css"
import Image from "next/image";
const HomePage = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p>
        In nulla dolor sint cupidatat pariatur ad dolore eiusmod Lorem cillum aute occaecat laboris voluptate.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src = "/brands.png" alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
    </div>

    <div className={styles.imgContainer}>
    <Image src = "/hero.gif" alt ="" fill className= {styles.heroImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority/>
    </div>
  </div>
}

export default HomePage;