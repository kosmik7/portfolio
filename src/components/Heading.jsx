import PropTypes from "prop-types";
import styles from "./Heading.module.scss";

Heading.propTypes = {
  children: PropTypes.string,
  anchor: PropTypes.string,
};

Heading.defaultProps = {
  children: "Titre",
};

export default function Heading({ anchor, children }) {
  return (
    <h2 id={anchor} className={styles.heading}>
      {children}
    </h2>
  );
}
