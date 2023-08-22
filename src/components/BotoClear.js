import React from "react";
import '../stylesheets/BotoClear.css'

const BotoClear = (props) => (
  <div className="boto-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotoClear;