const { getRanges } = require('../utils/colors');

// Base color palette (never use these directly)
const baseColors = {
  white: { r: 255, g: 255, b: 255 },
  brown: { r: 39, g: 35, b: 34} ,
  yellow: { r: 249, g: 154, b: 43 },
  orange: { r: 248, g: 91, b: 50},
  red: { r: 222, g: 70, b: 70 },
  blue: { r: 26, g: 55, b: 68 },
  green: { r: 106, g: 162, b: 80 },
  beige: { r: 252, g: 229, b: 180 },
  grey: { r: 93, g: 113, b: 131 },
};

const base = Object
  .keys(baseColors)
  .reduce((previous, color) => ({
    ...previous, [color]: getRanges(baseColors[color])
  }), {});

module.exports = {
  color: {
    // Descriptive colors (never use these directly)
    ...base,

    // Hierarchical colors
    primary: getRanges(base.green[100].value),
    secondary: getRanges(base.beige[100].value),
    tertiary: getRanges(base.blue[100].value),

    // Typography colors
    heading: getRanges(base.brown[100].value),
    'sub-heading': getRanges(base.brown[100].value),
    text: getRanges(base.brown[100].value),
    'text-inversed': getRanges(base.white[100].value),

    // User interface colors
    ui: getRanges(base.grey[100].value),

    // State colors
    error: getRanges(base.red[100].value),
    success: getRanges(base.green[100].value),
    warning: getRanges(base.orange[100].value),
    select: getRanges(base.brown[100].value),
    focus: getRanges(base.orange[100].value),
  }
};
