/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { bluegrey400, bluegrey800, grey400, grey800, grey900 } from "./colors";

const bluegrey400_bluegrey800: PaletteOptions = {
  primary: bluegrey400,
  secondary: bluegrey800,
};

const bluegrey800_bluegrey400: PaletteOptions = {
  primary: bluegrey800,
  secondary: bluegrey400,
};

const grey800_grey800: PaletteOptions = {
  primary: grey800,
  secondary: grey800,
};

const grey800_grey400: PaletteOptions = {
  primary: grey800,
  secondary: grey400,
};

const grey900_grey400: PaletteOptions = {
  primary: grey900,
  secondary: grey400,
};

const palette: PaletteOptions = bluegrey800_bluegrey400;

export default palette;