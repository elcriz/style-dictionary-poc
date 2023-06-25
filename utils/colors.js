const Color = require('tinycolor2');

function getRanges(value, comment = {}) {
  const ranges = {

    // Lighter colors
    '10': { value: Color(value).lighten(45).toRgbString() },
    '20': { value: Color(value).lighten(40).toRgbString() },
    '30': { value: Color(value).lighten(35).toRgbString() },
    '40': { value: Color(value).lighten(30).toRgbString() },
    '50': { value: Color(value).lighten(25).toRgbString() },
    '60': { value: Color(value).lighten(20).toRgbString() },
    '70': { value: Color(value).lighten(15).toRgbString() },
    '80': { value: Color(value).lighten(10).toRgbString() },
    '90': { value: Color(value).lighten(5).toRgbString() },

    // Default color
    '100': { value: Color(value).toRgbString() },

    // Darker colors
    '200': { value: Color(value).darken(5).toRgbString() },
    '300': { value: Color(value).darken(10).toRgbString() },
    '400': { value: Color(value).darken(15).toRgbString() },
    '500': { value: Color(value).darken(20).toRgbString() },
    '600': { value: Color(value).darken(25).toRgbString() },
    '700': { value: Color(value).darken(30).toRgbString() },
    '800': { value: Color(value).darken(35).toRgbString() },
    '900': { value: Color(value).darken(40).toRgbString() },
    '1000': { value: Color(value).darken(45).toRgbString() },
  };

  // Remove redundant values
  return Object.keys(ranges)
    .reverse()
    .reduce((previous, current) => {
      const isExisting = Object.keys(previous)
        .findIndex(value => ranges[value].value === ranges[current].value) !== -1;
      if (!isExisting) {
        return { ...previous, [current]: ranges[current] };
      }
      return previous;
    }, {});
}

module.exports = {
  getRanges,
};
