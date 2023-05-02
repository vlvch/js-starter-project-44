#!/usr/bin/env node

const trueOrFalse = (answer) => {
  if (answer === true) {
    return ['yes'];
  }
  return ['no'];
};
export default trueOrFalse;
