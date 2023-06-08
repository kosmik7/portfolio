import styles from "./NavBar.module.scss";
import data from "../assets/data-navlinks.json";

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

export default function NavBar() {
  return (
    <header className={styles.header}>
      <NavLinks />
    </header>
  );
}
