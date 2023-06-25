const Color = require('tinycolor2');

export const getRanges = (value) => {
  return {
    '10': { value: Color(value).lighten(90).toString() },
    '20': { value: Color(value).lighten(80).toString() },
    '30': { value: Color(value).lighten(70).toString() },
    '40': { value: Color(value).lighten(60).toString() },
    '50': { value: Color(value).lighten(50).toString() },
    '60': { value: Color(value).lighten(40).toString() },
    '70': { value: Color(value).lighten(30).toString() },
    '80': { value: Color(value).lighten(20).toString() },
    '90': { value: Color(value).lighten(10).toString() },
    '100': value,
    '200': { value: Color(value).darken(10).toString() },
    '300': { value: Color(value).darken(20).toString() },
    '400': { value: Color(value).darken(30).toString() },
    '500': { value: Color(value).darken(40).toString() },
    '600': { value: Color(value).darken(50).toString() },
    '700': { value: Color(value).darken(60).toString() },
    '800': { value: Color(value).darken(70).toString() },
    '900': { value: Color(value).darken(80).toString() },
    '1000': { value: Color(value).darken(90).toString() },
  };
};
