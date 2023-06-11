import { useState } from "react";
import styles from "./NavBar.module.scss";
import data from "../assets/data-navlinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavLinks() {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const menuisOpen = isOpen ? styles.isOpen : "";

  return (
    <>
      <div
        className={styles.hamburger + " " + menuisOpen}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
    </>
  );
}

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Hamburger />
      <NavLinks />
    </header>
  );
}
