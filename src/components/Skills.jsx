import PropTypes from "prop-types";
import data from "../assets/data-skills.json";
import styles from "./Skills.module.scss";

Skill.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
};

function Skill({ icon, name }) {
  return (
    <div className={styles.skill}>
      <img src={icon} alt="" />
      <span>{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <div className={styles.container}>
      <div>
        {data.skills.map((item) => (
          <Skill key={item.name} {...item} />
        ))}
      </div>
      <h3>Les outils de que j&apos;utilise</h3>
      <div>
        {data.tools.map((item) => (
          <Skill key={item.name} {...item} />
        ))}
      </div>
      <h3>J&apos;ai pu travailler avec</h3>
      <div>
        {data.other.map((item) => (
          <Skill key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
