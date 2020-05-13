import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';

export default function withMargin<P = {}>(
  WrappedComponent: React.ComponentType<P>,
): React.FunctionComponent<P> {
  return (props: React.PropsWithChildren<P>) => {
    const theme = useTheme();
    return (
      <Box
        position="absolute"
        top={theme.spacing(1)}
        left={theme.spacing(1)}
        right={theme.spacing(1)}
        bottom={theme.spacing(1)}
      >
        <WrappedComponent {...props} />
      </Box>
    );
  };
}
