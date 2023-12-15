import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
