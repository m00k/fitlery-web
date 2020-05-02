import Box from "@material-ui/core/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";

const Main = ({ children }: any) => {
  const theme = useTheme();
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  return (
    <Box
      bottom={navHeight}
      top={navHeight}
      left={0}
      right={0}
      overflow='auto'
      position='fixed'
      display='flex'
      flexDirection='column'
      alignItems='center'
      ml={1/2}
      mr={1/2}
    >
      <Box
        width={1}
        maxWidth={theme.breakpoints.values.lg}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
