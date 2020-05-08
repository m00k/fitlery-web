import { useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { PropsWithChildren } from 'react';

// TODO
// interface WithLoadingProps {
//   loading: boolean;
// }

// const withLoading = <P extends object>(
//   Component: React.ComponentType<P>
// ): React.FC<P & WithLoadingProps> => ({
//   loading,
//   ...props
// }: WithLoadingProps) =>
//   loading ? <span /> : <Component {...props as P} />;


// const withMargin = <P extends object>(WrappedComponent: React.ComponentType<P & WithLoadingProps>) => (props: any): React.FC<{}> => <WrappedComponent />;
// const withMargin = (WrappedComponent: any) => (props: any) => <WrappedComponent />;

const WithMargin = ({ children }: PropsWithChildren<any>) => {
  const theme = useTheme();
  return (
    <Box
      position="absolute"
      top={theme.spacing(1)}
      left={theme.spacing(1)}
      right={theme.spacing(1)}
      bottom={theme.spacing(1)}
    >
      {children}
    </Box>
  );
}

export default WithMargin;