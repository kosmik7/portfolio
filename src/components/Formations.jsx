import PropTypes from "prop-types";
import data from "../assets/data-formations.json";
import styles from "./Formations.module.scss";

Formation.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

function Formation({ name, subtitle, description }) {
  return (
    <div className={styles.formation}>
      <span className={styles.title}>{name}</span>
      <span className={styles.subtitle}>{subtitle}</span>
      {description ? <p className={styles.description}>{description}</p> : ""}
    </div>
  );
}

export default function Formations() {
  return (
    <div className={styles.container}>
      <div className={styles.flexWrapper}>
        {data.map((item) => (
          <Formation key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
