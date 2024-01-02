import styles from "./CreatorFeatures.module.css";

const CreatorFeatures = () => {
  return (
    <div className={styles.root}>
      <div className={styles.upper}>
        <div className={styles.upperLeft}>
          <div className={`${styles.content} ${styles.upperLeftContent}`}>
            <h3 style={{ color: "#fff" }}>Only pay for a Unique Click</h3>
            <p style={{ color: "#fff" }}>
              Suprrlink’s Pay per click feature enables you to only for the
              unique click from your creator funnel
            </p>
          </div>
        </div>

        <div className={styles.upperRight}>
          <div className={styles.content}>
            <h3>Hyper targeted audience</h3>
            <p>Something about the feature</p>
          </div>
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.lowerLeft}>
          <div className={styles.content}>
            <h3>Dedicated Relationship manager</h3>
            <p>Something about the feature</p>
          </div>
        </div>

        <div className={styles.lowerRight}>
          <div className={styles.content}>
            <h3>Hassle free content from multiple influencers</h3>
            <p>Something about the feature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorFeatures;
