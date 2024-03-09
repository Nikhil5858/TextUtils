import React from "react";

const Alert = (props) => {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
      <strong>{props.alert.type}</strong> : {props.alert.message}
    </div>
  );
};

export default Alert;
