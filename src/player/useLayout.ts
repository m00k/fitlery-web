import { Theme, useMediaQuery, useTheme } from '@material-ui/core';

// TODO: from global context
const useMediaQueries = (theme: Theme) => {
  const [upxs, upsm, upmd] = [
    theme.breakpoints.up('xs'),
    theme.breakpoints.up('sm'),
    theme.breakpoints.up('md')
  ];
  return [upxs, upsm, upmd];
};

// TODO: from global context
const useActiveMediaQuery = (theme: Theme): string => {
  const [upxs, upsm, upmd] = useMediaQueries(theme);
  const mqis = [
    { mq: upxs, matches: useMediaQuery(upxs) },
    { mq: upsm, matches: useMediaQuery(upsm) },
    { mq: upmd, matches: useMediaQuery(upmd) },
  ];
  const mq = mqis
    .filter(mqi => mqi.matches)
    .map(mqi => mqi.mq)
    .slice(-1)
    [0] || upxs;
  return mq;
}

const useRowHeights = (theme: Theme, mq: string): number[] => {
  const [upxs, upsm, upmd] = useMediaQueries(theme);
  const [text, controls, current] = {
    [upxs]: [16, 11, 15],
    [upsm]: [17, 11, 15],
    [upmd]: [15, 13, 15],
  }[mq].map(s => theme.spacing(s));
  return [text, controls, current];
};

function useRootStyles(theme: Theme, mq: string): React.CSSProperties {
  const [upxs, upsm, upmd] = useMediaQueries(theme);
  const [textHeight, controlsHeight, currentHeight] = useRowHeights(theme, mq);
  const totalHeight = textHeight + controlsHeight + currentHeight;
  const listHeight = `calc(100vh - ${theme.variables.navbar.height * 2}px - ${totalHeight}px)`; // TODO: prevent <= 0 
  return {
    [upxs]: {
      display: 'grid',
      gridTemplateAreas: `
        'avatar text text text text'
        'controls controls controls controls controls'
        'current current current current current'
        'list list list list list'
      `,
      gridTemplateColumns: `${textHeight}px repeat(4, 1fr)`,
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`,
    },
    [upsm]: {
      display: 'grid',
      gridTemplateAreas: `
        'avatar avatar text text text'
        'avatar avatar controls controls controls'
        'current current current current current'
        'list list list list list'
      `,
      gridTemplateColumns: `repeat(2, ${(textHeight + controlsHeight) / 2}px) repeat(3, 1fr)`,
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`,
    },
    [upmd]: {
      display: 'grid',
      gridTemplateAreas: `
        'avatar avatar avatar text text'
        'avatar avatar avatar controls controls'
        'avatar avatar avatar current current'
        'list list list list list'
      `,
      gridTemplateColumns: `repeat(3, ${totalHeight / 3}px) repeat(2, 1fr)`,
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`,
    }
  }[mq];
}

export const useLayout = (): {[key: string]: React.CSSProperties} => {
  const theme = useTheme();
  const mq = useActiveMediaQuery(theme);
  const root = useRootStyles(theme, mq);
  const styles = {
    root,
  };
  return styles;
}
