import useTheme from '@material-ui/core/styles/useTheme';

const useColors = (invertColors: boolean) => {
  const theme = useTheme();
  const light = {
    bgcolor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
  };
  const dark = {
    bgcolor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
  };
  const [left, done] = invertColors
    ? [dark, light]
    : [light, dark];
  return [left, done];
}

export default useColors;