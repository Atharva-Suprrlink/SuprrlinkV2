import CheckIcon from "../svgs/CheckIcon";
import styles from "./Card.module.css";

const Card = ({
  perks,
  title,
  price,
  buttonLabel,
  popular,
  billed,
}: {
  perks: Array<string>;
  title: string;
  price: string;
  buttonLabel: string;
  popular?: boolean;
  billed?: boolean;
}) => {
  return (
    <div
      className={styles.root}
      style={popular ? { background: "#0B2A31" } : {}}
    >
      <div className={styles.titleContainer}>
        <p className={styles.planName} style={popular ? { color: "#fff" } : {}}>
          {title}
        </p>
        <h3 style={popular ? { color: "#fff" } : {}}>{price}</h3>
        {billed && (
          <p className={styles.billed} style={popular ? { color: "#fff" } : {}}>
            Billed annually
          </p>
        )}
        {popular && <div className={styles.tag}>POPULAR</div>}
      </div>

      <div className={styles.perks}>
        {perks.map((item) => (
          <div className={styles.perk}>
            <CheckIcon />
            <p style={popular ? { color: "#fff" } : {}}>{item}</p>
          </div>
        ))}
      </div>

      <button
        style={
          popular
            ? { color: "#0B2A31", background: "#fff", fontWeight: "600" }
            : {}
        }
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
