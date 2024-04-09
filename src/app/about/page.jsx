import Image from "next/image";
import styles from "./about.module.css";
export const metadata = {
  title: "About",
  description: "About page",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver, and better.
        </h1>
        <p className={styles.description}>
          Deserunt tempor consectetur dolor sunt veniam occaecat. Velit officia
          enim culpa ullamco excepteur sunt. Enim non elit do laboris ad culpa
          et labore velit pariatur est.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>100k+</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1>5k+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;

// external source image..
// in next.config change nextConfig as
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             "https://images.unsplash.com/photo-:id"
//         ]
//     }
// }

// OR
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: "www.pexels.com"
//             }
//         ]
//     }
// }

// paste image link as src ----> https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
