import styles from "./Steps.module.css";

const Steps = () => {
  return (
    <div className={styles.root}>


      <div className={styles.section}>

        <h2>3 simple steps to get you started</h2>

        <p>
          {" "}
          Our easy onboarding process with you creators will help you launch
          your campaigns faster than ever
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button1}>Schedule a free demo</button>
          <button className={styles.button2}>Brand Signup</button>
        </div>
      </div>


        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="/card1.png" alt="card1" />
                <div className={styles.cardContent}>
                    <h3>Choose your Niche</h3>
                    <p>Select your target demographics, and enter all campaign related details</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="/card2.png" alt="card2" />
                <div className={styles.cardContent}>
                    <h3>Select your Budget</h3>
                    <p>Select from influencer pool, and connect existing Facebook or Google Analytics</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="/card3.png" alt="card3" />
                <div className={styles.cardContent}>
                    <h3>Take your campaign live</h3>
                    <p>See results real time with our best in industry dashboard with all your live content.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Steps;
