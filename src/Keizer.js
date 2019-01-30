import React from 'react';

function Keizer(props) {
  return (
      <button
          className="keizer"
          onClick={props.onClick}>
          {props.value}
      </button>
  );
}

export default Keizer;