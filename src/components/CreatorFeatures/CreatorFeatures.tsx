import styles from "./CreatorFeatures.module.css";

const CreatorFeatures = () => {
  return (
    <div className={styles.root}>
      <div className={styles.upper}>
        <div className={styles.upperLeft}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className={styles.content}>
              <h3>Only pay for a Unique Click</h3>
              <p>
                Suprrlink’s Pay per click feature enables you to only for the
                unique click from your creator funnel
              </p>
            </div>
            <div
              style={{
                // flex: "1",
              }}
            >
              <div
                style={{
                  maxWidth: "100%", // Make sure the container doesn't exceed the width of its parent
                  height: "auto", // Maintain the aspect ratio of the image
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/Group7.png" // Replace with the actual image URL
                  alt="Description of the image"
                  style={{
                    maxWidth: "100%", // Make sure the image doesn't exceed the width of its container
                    height: "auto", // Maintain the aspect ratio of the image
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreatorFeatures;
