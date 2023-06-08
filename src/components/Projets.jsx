import PropTypes from "prop-types";
import Button from "./Button";
import data from "../assets/data-projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projets.module.scss";

Projet.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.string,
  tools: PropTypes.string,
};

Projet.defaultProps = {
  name: "Nom du projet",
  description: "Description du projet",
};

function Projet({ image, name, description, link, tags, tools }) {
  return (
    <div className={styles.projet}>
      <img src={image} alt="" />
      <div className={styles.projetInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href=""></a>
        <div className={styles.tags}>
          <div>
            <a href={link}>
              <Button>
                <FontAwesomeIcon icon="fa-brands fa-github" />
                GitHub
              </Button>
            </a>
            {tags.map((item) => (
              <Button key={item} disabled>
                {item}
              </Button>
            ))}
          </div>
          <div>
            {tools.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projets() {
  return (
    <div className={styles.projetsContainer}>
      {data.map((item) => (
        <Projet key={item.name.replace(/\s/g, "")} {...item} />
      ))}
    </div>
  );
}
