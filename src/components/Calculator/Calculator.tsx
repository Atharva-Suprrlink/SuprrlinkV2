import styles from "./Calculator.module.css";

const Calculator = () => {
    const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2>Get an idea of your ROI</h2>
        <p>
          By filling the following details we can give a predicted reach, click
          you can receive pay per click{" "}
        </p>
      </div>

      <div className={styles.calculator}>
        <div className={styles.left}>
          <div className={styles.leftTitle}>
            <h3>Reach Calculator</h3>
            <p>We can help you predict your reach of the campaigns</p>
          </div>

          <div className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="category">Category <span style={{color:'red'}}>*</span></label>
              <select className={styles.categories} id="category">
                <option value="" disabled selected hidden style={{color: 'rgba(22, 25, 29, 0.5)'}}>
                  Select an option
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="budget">Budget <span style={{color:'red'}}>*</span></label>
                <input type="text" placeholder="Mention buget in INR" />
            </div>

            <div className={styles.buttonContainer}>
                <button>Calculate</button>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="/calculator.png" // Public URL path to the image
            alt="Description of the image"
            style={{
              maxWidth: "100%",
              maxHeight: "20rem",
              height: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
