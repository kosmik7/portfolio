import Heading from "./Heading";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <Heading anchor="contact">Contact</Heading>
          <div className={styles.buttons}>
            <a href="mailto:jp.brunache@gmail.com">
              <Button>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                Email
              </Button>
            </a>
            <a href="https://github.com/kosmik7">
              <Button style="outline">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                Github
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/jean-philippe-brunache-020990280">
              <Button>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                LinkedIn
              </Button>
            </a>
          </div>
          <p>
            Ce site a été réalisé à la main et ne collecte aucune donnée. Vous
            pouvez trouver le code source sur{" "}
            <a href="https://github.com/kosmik7/portfolio">GitHub</a>.<br />
            Merci de votre visite, passez une bonne journée ! 👋
          </p>
        </div>
      </div>
    </div>
  );
}
