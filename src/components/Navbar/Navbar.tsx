import Logo from "../svgs/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.accessibilityButtons}>
        <button className={styles.button1}>For Creators</button>
        <button className={styles.button1} style={{
          borderRight: "1px solid #39616A",
          paddingRight: "1.7rem"
        }}>Contact us</button>
        <button className={styles.button2}>Log In</button>
        <button className={styles.button3}>Brand Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
