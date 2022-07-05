import React from "react";
import styles from "./style.module.css";
import PropTypes from "prop-types";
const { contrastColor } = require("contrast-color");

const Tag = ({ color, text = "this is a tag" }) => {
  const textColor = contrastColor({ bgColor: color });
  return (
    <a
      href="#something"
      style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      className={`hover:bg-blue-200 inline-block text-base font-semibold mr-2 px-2.5 py-1 rounded `}
    >
      {text}
    </a>
  );
};

Tag.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
export default Tag;
