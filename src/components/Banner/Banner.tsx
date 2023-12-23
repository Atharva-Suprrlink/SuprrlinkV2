import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.root}>
        <div className={styles.left}>
            <div className={styles.leftUpper}>
                <div className={styles.leftUpperContent}>
                    <h3>Unlike any tool you’ve used before</h3>
                    <p>Crafted with precision and for speed, suprrlink will help you run you campaigns fast like never before.</p>
                </div>
                <div className={styles.leftContentButton}>
                    <button className={styles.button1}>Brand Signup</button>
                    <button className={styles.button2}>Schedule a free demo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner