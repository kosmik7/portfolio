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
      <img src={icon} alt={"icone de " + name} width="96" height="96" />
      <span>{name}</span>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.array,
  heading: PropTypes.string,
};

function Category({ category, heading }) {
  return (
    <div>
      <h3>{heading}</h3>
      <div className={styles.iconsGrid}>
        {category.map((item) => (
          <Skill key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className={styles.container}>
      <Category category={data.skills} heading="Stack technique" />
      <Category category={data.tools} heading="Les outils que j'utilise" />
      <Category category={data.other} heading="J'ai pu travailler avec" />
    </div>
  );
}
