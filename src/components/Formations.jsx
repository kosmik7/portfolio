import PropTypes from "prop-types";
import data from "../assets/data-formations.json";
import styles from "./Formations.module.scss";

Formation.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

function Formation({ name, description }) {
  return (
    <div className={styles.formation}>
      <span>{name}</span>
      <span>{description}</span>
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
