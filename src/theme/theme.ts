import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { bluegrey800_bluegrey400 } from "./palette";

let theme = createMuiTheme({
  palette: bluegrey800_bluegrey400,
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
  },
});
theme = responsiveFontSizes(theme);

export default theme;
