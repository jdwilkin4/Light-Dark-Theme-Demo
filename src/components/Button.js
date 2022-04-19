import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "../utils/useTheme";
import "./Button.scss";

export const Button = ({ text, path }) => {
  const theme = useTheme();
  return (
    <Link to={path} className={`btn ${theme}`}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};
