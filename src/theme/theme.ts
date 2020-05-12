import { createMuiTheme, responsiveFontSizes, SimplePaletteColorOptions } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { ComponentProps } from "react";
import palette from "./palette";

// https://material-ui.com/guides/typescript/#augmenting-your-props-using-withstyles
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    variables: {
      avatar: {
        height: number,
      },
      countdown: {
        height: number,
      },
      navbar: {
        height: number, // React.CSSProperties['height'] -> string | number | undefined
      },
      player: {
        height: number,
      },
      playlist: {
        currentItem: {
          height: Number,
        },
        item: {
          height: Number,
        },
      }
    }
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    variables: {
      avatar: {
        height: number,
      },
      countdown: {
        height: number,
      },
      navbar: {
        height: number,
      },
      player: {
        height: Number,
      },
      playlist: {
        currentItem: {
          height: Number,
        },
        item: {
          height: Number,
        },
      }
    }
  }
}

const primary = palette.primary as SimplePaletteColorOptions;
const secondary = palette.secondary as SimplePaletteColorOptions;
const SPACING = 8; // TODO: reuse from default mui theme?
const TOOLBAR_HEIGHT = SPACING * 6; // MuiToolbar variant dense

const variables = {
  avatar: {
    height: SPACING * 14,
  },
  countdown: {
    height: SPACING * 16,
  },
  navbar: {
    height: TOOLBAR_HEIGHT,
  },
  player: {
    height: SPACING * 27,
  },
  playlist: {
    currentItem: {
      height: SPACING * 15,
    },
    item: {
      height: SPACING * 7.5,
    },
  },
};

const props: ComponentProps<any> | undefined = {
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
};

const typography = {
  caption: {
    lineHeight: 1.2,
  }
};

const overrides = {
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
};



let theme: Theme = createMuiTheme({
  palette,
  props,
  overrides,
  typography,
  variables,
});
theme = responsiveFontSizes(theme);

export default theme;
