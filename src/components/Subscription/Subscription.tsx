import Card from "../Card/Card";
import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2>Simple and transparent pricing</h2>
        <p>
          Use suprrlink for free. Upgrade to enable more admins, more campaigns,
          analytics, and additional features.
        </p>
      </div>

      <div className={styles.cards}>
        <Card
          title="Basic plan"
          price="$0/mth"
          perks={
            [
              "Find & onboard verified influencers",
              "Analyse their profile & reputation data",
              "Understand their fan demographics",
              "Monitor multiple content type",
              "Measure campaign performance & ROI"
            ]
          }
          buttonLabel="Get started"
        />
        <Card
          title="Premium"
          price="$299/mth"
          perks={
            [
              "Multiple admins access",
              "Up to 2,500 creator analytics report",
              "Creator comparison using analytics",
              "Up to 50 campaign boosts",
              "Get started hassle free, start your first 2 campaigns.",
              "Content copyrights"
            ]
          }
          buttonLabel="Get started"
          popular
          billed
        />
        <Card
          title="Enterprise plan"
          price="Contact Sales"
          perks={
            [
              "Everything in Premium",
              "Dedicated account manager",
              "Unlimited creator analytics report",
              "Unlimited campaign boosts",
              "Exclusive campaign agreement"
            ]
          }
          buttonLabel="Get started"
          billed
        />
      </div>
    </div>
  );
};

export default Subscription;
