import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const blueGreyMonochrome1: PaletteOptions = {
  primary: {
    main: '#78909c',
    light: '#a7c0cd',
    dark: '#4b636e',
    contrastText: '#eceff1',
  },
  secondary: {
    main: '#455a64',
    light: '#718792',
    dark: '#1c313a',
    contrastText: '#fff',
  },
};

// TODO: use or lose
// const blueGreyMonochrome2: PaletteOptions = {
//   primary: {
//     main: '#455a64',
//     light: '#718792',
//     dark: '#1c313a',
//     contrastText: '#ffffff',
//   },
//   secondary: {
//     main: '#78909c',
//     light: '#a7c0cd',
//     dark: '#4b636e',
//     contrastText: '#eceff1',
//   },
// };

let theme = createMuiTheme({
  palette: blueGreyMonochrome1,
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h3',
        h2: 'h3',
        h3: 'h3',
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
