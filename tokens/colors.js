const { getRanges } = require('../utils/colors');

const baseColors = {
  white: { r: 255, g: 255, b: 255 },
  brown: { r: 39, g: 35, b: 34} ,
  yellow: { r: 249, g: 154, b: 43 },
  orange: { r: 248, g: 91, b: 50},
  red: { r: 222, g: 70, b: 70 },
  blue: { r: 26, g: 55, b: 68 },
  green: { r: 106, g: 162, b: 80 },
  beige: { r: 252, g: 229, b: 180 },
  grey: { r: 93, g: 113, b: 13 },
};

module.exports = {
  base: Object
    .keys(baseColors)
    .reduce((previous, color) => ({
      ...previous, [color]: getRanges(color)
    }), {}),
  hierarchical: {
    primary: getRanges(baseColors.green.value),
    secondary: getRanges(baseColors.beige.value),
    tertiary: getRanges(baseColors.blue.value),
  },
  typography: {
    heading: getRanges(baseColors.brown.value),
    'sub-heading': getRanges(baseColors.brown.value),
    text: getRanges(baseColors.brown.value),
    'text-inversed': getRanges(baseColors.white.value),
  },
  ui: getRanges(baseColors.grey.value),
  states: {
    error: getRanges(baseColors.red.value),
    success: getRanges(baseColors.green.value),
    warning: getRanges(baseColors.orange.value),
    select: getRanges(baseColors.brown.value),
    focus: getRanges(baseColors.orange.value),
  }
};
