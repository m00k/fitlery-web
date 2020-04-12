import { createMuiTheme, responsiveFontSizes, SimplePaletteColorOptions } from "@material-ui/core";
import palette from "./palette";

const primary = palette.primary as SimplePaletteColorOptions;
const secondary = palette.secondary as SimplePaletteColorOptions;
const TOOLBAR_HEIGHT = 48; // dense muitoolbar height 48

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
    MuiToolbar: {
      variant: 'dense', // TOOLBAR_HEIGHT
    }
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
        height: TOOLBAR_HEIGHT,
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
    MuiToolbar: {
      root: {
        height: TOOLBAR_HEIGHT, // used in Main()
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
