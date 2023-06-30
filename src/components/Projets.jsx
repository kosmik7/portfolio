import PropTypes from "prop-types";
import Button from "./Button";
import data from "../assets/data-projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projets.module.scss";

Projet.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.array,
  tools: PropTypes.array,
};

Projet.defaultProps = {
  name: "Nom du projet",
  description: "Description du projet",
};

function Projet({ image, name, subtitle, description, link, tags, tools }) {
  return (
    <div className={styles.projet}>
      <picture className={styles.projetImage}>
        <source type="image/webp" srcSet={image + ".webp"} />
        <img
          src={image + ".jpg"}
          alt={"Capture d'écran du projet " + name}
          width="720"
          height="540"
        />
      </picture>
      <div>
        <div className={styles.projetInfo}>
          <span>{name}</span>
          <h3>{subtitle}</h3>
          <p>{description}</p>
        </div>
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
          <div className={styles.tools}>
            {tools.map((item) => (
              <img
                key={item}
                src={"/portfolio/icons/" + item + ".svg"}
                alt={"icone de " + item}
                width="16px"
                height="16px"
              />
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
