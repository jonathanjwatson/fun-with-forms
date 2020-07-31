import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const buttonType = props.type ? props.type : "primary";
  const handleButtonClick = (e) => {
    if (props.handleClick) {
      props.handleClick(e);
    }
  };
  return (
    <button
      className={`btn btn-${buttonType}`}
      onClick={(e) => {
        handleButtonClick(e);
      }}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
