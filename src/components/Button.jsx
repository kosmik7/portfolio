import PropTypes from "prop-types";
import styles from "./Button.module.scss";

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.string,
};

Button.defaultProps = {
  children: "Bouton",
  type: "button",
  style: "btn",
};

export default function Button({ style, type, children, ...rest }) {
  return (
    <button className={styles[style]} type={type} {...rest}>
      {children}
    </button>
  );
}
