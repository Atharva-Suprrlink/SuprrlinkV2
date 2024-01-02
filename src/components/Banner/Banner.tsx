import Chart from "../svgs/Chart";
import Copy from "../svgs/Copy";
import Database from "../svgs/Database";
import ListPlus from "../svgs/ListPlus";
import Sidebar from "../svgs/Sidebar";
import Sparkle from "../svgs/Sparkle";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.leftUpper}>
          <div className={styles.leftUpperContent}>
            <h3>Unlike any tool you’ve used before</h3>
            <p>
              Crafted with precision and for speed, suprrlink will help you run
              you campaigns fast like never before.
            </p>
          </div>
          <div className={styles.leftContentButton}>
            <button className={styles.button1}>Brand Signup</button>
            <button className={styles.button2}>Schedule a free demo</button>
          </div>
        </div>

        <div className={styles.leftLower}>
          <div className={styles.gridItem}>
            <Copy />
            <p>Run multiple campaigns at a time</p>
          </div>
          <div className={styles.gridItem}>
            <Sidebar />
            <p>One dashboard to control your campaigns, creators, and more</p>
          </div>
          <div className={styles.gridItem}>
            <Sparkle />
            <p>Al Enabled creator selection</p>
          </div>
          <div className={styles.gridItem}>
            <Database />
            <p>Transparent Data / Stats from campaigns</p>
          </div>
          <div className={styles.gridItem}>
            <Chart />
            <p>Unlimited creator search & stats</p>
          </div>
          <div className={styles.gridItem}>
            <ListPlus />
            <p>And many more...</p>
          </div>
        </div>

      </div>

      <div className={styles.right}>
        <img src="/DashboardImage.png" alt="dashboard" />
      </div>
    </div>
  );
};

export default Banner;
