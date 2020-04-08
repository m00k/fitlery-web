import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { bluegrey400_bluegrey800 } from "./palette";

let theme = createMuiTheme({
  palette: bluegrey400_bluegrey800,
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h3',
        h2: 'h3',
        h3: 'h3',
      },
    },
  },
  typography: {
    caption: {
      lineHeight: 1.2,
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
