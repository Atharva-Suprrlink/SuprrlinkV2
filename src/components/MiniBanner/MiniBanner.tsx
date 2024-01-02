import styles from './MiniBanner.module.css'

const MiniBanner = () => {
  return (
    <div className={styles.root}>
        <div className={styles.banner}>
            <div className={styles.left}>
                <h2>Helping more than 100+ brands to run their marketing campaigns</h2>
                <p>Learn more about how we help companies to run their campaigns though our newsletters</p>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder=' Please enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className={styles.right}>
                <img src="/minibanner.png" alt="minibanner" />
            </div>
        </div>
    </div>
  )
}

export default MiniBanner