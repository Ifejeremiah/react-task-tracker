import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, btnColor, text }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button text={text} color={btnColor} onClick={() => { onAdd() }} />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
