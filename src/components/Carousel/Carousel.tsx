import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div className={styles.root}>
      <p>Join 100+ companies from various industries already working with us</p>

      <div className={styles.categories}>
        <button>All</button>
        <button>Fintech</button>
        <button>E-commerce</button>
        <button>Ed-tech</button>
        <button>Logistics</button>
        <button>OTTs</button>
      </div>

      <div className={styles.carousel}>
        <img src="/image7.png" alt="image" />
        <img src="/image8.png" alt="image" />
        <img src="/image9.png" alt="image" />
        <img src="/image10.png" alt="image" />
        <img src="/image11.png" alt="image" />
        <img src="/image12.png" alt="image" />
      </div>
    </div>
  );
};

export default Carousel;
