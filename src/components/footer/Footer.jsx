import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.text}>Aliqua dolore nisi {String.fromCodePoint(0x00A9)}All rights reserved</div>
        </div>
    );
}

export default Footer;