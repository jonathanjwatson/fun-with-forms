import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.label}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
