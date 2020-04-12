import React from "react";
import { Box, useTheme } from "@material-ui/core";

const Main = ({ children }: any) => {
  const theme = useTheme();
  const plr = `calc(50vw - ${theme.breakpoints.values.md / 2}px)`;
  const bottom = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  const top = (theme.overrides?.MuiToolbar?.root as any).height;

  return (
    <Box
      bottom={bottom}
      left={0}
      right={0}
      overflow='auto'
      position='fixed'
      top={top}
      pl={plr}
      pr={plr}
    >
      {children}
    </Box>
  );
}

export default Main;