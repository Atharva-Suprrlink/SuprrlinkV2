import Logo from "../svgs/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.innerRoot}>
        <div className={styles.upper}>
          <div className={styles.left}>
            <Logo />
            <p>We automatically match you with the perfect influencers to advertise your brand, boosting reach, sales, and visitor numbers.</p>
          </div>

          <div className={styles.right}>
            <div className={styles.rightColumn}>
                <p>For brands</p>
                <div className={styles.columnContent}>
                    <button>How it works</button>
                    <button>Schedule a demo</button>
                </div>
            </div>
            <div className={styles.rightColumn}>
                <p>For creators</p>
                <div className={styles.columnContent}>
                    <button>What will you earn?</button>
                    <button>Sign up as a creator</button>
                </div>
            </div>
            <div className={styles.rightColumn}>
                <p>Company</p>
                <div className={styles.columnContent}>
                    <button>We’re hiring</button>
                </div>
            </div>
          </div>
        </div>
        <div style={{
            width: '100%',
            borderTop: '0.5px solid #39616A'
        }}/>
        <div className={styles.footerText}>
            <p>© 2023 Xartup Edutech Private Limited. All right reserved.</p>
            <div className={styles.footerTextRight}>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
