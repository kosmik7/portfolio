import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";
import data from "../assets/data-navlinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuisOpen = isOpen ? styles.isOpen : "";
  const ref = useRef();

  // Ferme le menu si click en dehors (de ref)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.navContainer}>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
        </div>
        <ul className={menuisOpen}>
          {data.map((item) => (
            <li key={item.name}>
              <a href={item.link} onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
