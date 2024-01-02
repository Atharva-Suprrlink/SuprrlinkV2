import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.nameContainer}>
            <h1>Amplify Your Reach with Digital Creators </h1>
            <p>
              We automatically match you with the perfect influencers to
              advertise your brand, boosting reach, sales, and visitor numbers.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button1}>Schedule a free demo</button>
              <button className={styles.button2}>Brand Signup</button>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/Group5.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
