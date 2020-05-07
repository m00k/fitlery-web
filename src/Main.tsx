import Box from "@material-ui/core/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";

const Main = ({ children }: any) => {
  const theme = useTheme();
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;

  return (
    <Box
      bottom={navHeight}
      display="grid"
      left={0}
      justifyItems="center"
      justifyContent="stretch"
      right={0}
      overflow="auto"
      position="fixed"
      top={navHeight}
    >
      <Box
        maxWidth={theme.breakpoints.values.lg}
        width={1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
