// @flow
type CSS = {
  gray: string,
  darkGray: string,
  blue: string,
  red: string,
  green: string,
};

export const css: CSS = {
  gray: '#ccc',
  darkGray: '#333',
  blue: '#66c',
  red: '#c66',
  green: '#6c6',
};

export const apiKey: string = process.env.API_KEY || '';

const constants = {
  css,
  apiKey,
};

export default constants;
