import React from 'react';
import Chance from 'chance';

const Names = (props) => {
  return (
    <div>
    <h4>Random Names of the day:</h4>
    <p>{props.name}</p>
    </div>
  );
}

export default Names;
