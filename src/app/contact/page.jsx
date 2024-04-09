import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.img}
          alt=""
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone number(Optional)" />
          <textarea name="" id="" cols={30} rows={10} />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
