import { createMuiTheme, responsiveFontSizes, SimplePaletteColorOptions } from "@material-ui/core";
import palette from "./palette";

const primary = palette.primary as SimplePaletteColorOptions;
const secondary = palette.secondary as SimplePaletteColorOptions;

let theme = createMuiTheme({
  palette,
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
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: primary.main,
      },
    },
    MuiBottomNavigationAction: {
      wrapper: {
        color: secondary.light,
      }
    },
    MuiButton: {
      label: {
        color: secondary.light,
      }
    },
    
  }
});
theme = responsiveFontSizes(theme);

export default theme;
