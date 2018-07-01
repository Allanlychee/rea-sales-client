import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginTop: 10, marginLeft: 2 }} >
    {props.children}
  </button>
);
