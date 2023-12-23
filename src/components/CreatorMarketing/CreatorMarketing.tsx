import CreatorFeatures from "../CreatorFeatures/CreatorFeatures";
import styles from "./CreatorMarketing.module.css";

const CreatorMarketing = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section1}>
        <h2>Creator Marketing was never easy before</h2>
        <p>
          Unlike any any other creator marketing and management tool we offer a
          variety of features to which cannot say no to.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button1}>Schedule a free demo</button>
          <button className={styles.button2}>Brand Signup</button>
        </div>
      </div>

      <div className={styles.section2}>
        <CreatorFeatures />
      </div>
    </div>
  );
};

export default CreatorMarketing;
