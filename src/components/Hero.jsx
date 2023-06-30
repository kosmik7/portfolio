import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div>
          <h2>
            Jean-Philippe <br />
            Brunache
          </h2>
          <h1>Intégrateur web</h1>
        </div>
        <p>
          Passionné par les technologies du web.
          <br />
          J’ai été attiré par le développement lors de mon expérience à un poste
          polyvalent dans une entreprise de signalétique et j’ai décidé de
          poursuivre dans ce domaine en obtenant un diplôme de développeur web.
        </p>
        <div className={styles.buttons}>
          <a href="https://github.com/kosmik7">
            <Button>
              <FontAwesomeIcon icon="fa-brands fa-github" />
              <span>Github</span>
            </Button>
          </a>
          <a href="https://drive.google.com/file/d/1QklmtcxGUQVFt_ZsonU4YL9Q82Oi1XYA/view?usp=sharing">
            <Button style="outline">
              <FontAwesomeIcon icon="fa-solid fa-file" />
              <span>Mon CV</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
