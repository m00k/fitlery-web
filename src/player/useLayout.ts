import { useMediaQuery, useTheme } from '@material-ui/core';

// TODO: useMemo
const useMediaQueries = () => {
  const theme = useTheme();
  const [upxs, upsm, upmd] = [
    theme.breakpoints.up('xs'),
    theme.breakpoints.up('sm'),
    theme.breakpoints.up('md')
  ];
  return [upxs, upsm, upmd];
};

const useActiveMediaQuery = () => {
  const [upxs, upsm, upmd] = useMediaQueries();
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

const useRowHeights = (mq: string, upxs: string, upsm: string, upmd: string) => {
  const theme = useTheme();
  const text = {
    [upxs]: theme.spacing(16),
    [upsm]: theme.spacing(17),
    [upmd]: theme.spacing(15),
  }[mq];
  const controls = {
    [upxs]: theme.spacing(11),
    [upsm]: theme.spacing(11),
    [upmd]: theme.spacing(13),
  }[mq];
  const current = {
    [upxs]: theme.spacing(15),
    [upsm]: theme.spacing(15),
    [upmd]: theme.spacing(15),
  }[mq];
  return [text, controls, current];
};

export const useLayout = () => {
  const theme = useTheme();
  const mq = useActiveMediaQuery();
  const [upxs, upsm, upmd] = useMediaQueries();
  const [textHeight, controlsHeight, currentHeight] = useRowHeights(mq, upxs, upsm, upmd);
  const totalHeight = textHeight + controlsHeight + currentHeight;
  const listHeight = `calc(100vh - ${theme.variables.navbar.height * 2}px - ${totalHeight}px)`; // TODO: prevent <= 0 

  const rootStyles: {[key: string]: any} = {
    [upxs]: {
      display: "grid",
      gridTemplateAreas: `
        "avatar text text text text"
        "controls controls controls controls controls"
        "current current current current current"
        "list list list list list"
      `,
      gridTemplateColumns: `${textHeight}px repeat(4, 1fr)`,
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`,
    },
    [upsm]: {
      display: "grid",
      gridTemplateAreas: `
        "avatar avatar text text text"
        "avatar avatar controls controls controls"
        "current current current current current"
        "list list list list list"
      `,
      gridTemplateColumns: `repeat(2, ${(textHeight + controlsHeight) / 2}px) repeat(3, 1fr)`,
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`,
    },
    [upmd]: {
      display: "grid",
      gridTemplateAreas: `
        "avatar avatar avatar text text"
        "avatar avatar avatar controls controls"
        "avatar avatar avatar current current"
        "list list list list list"
      `,
      gridTemplateColumns: `repeat(3, ${totalHeight / 3}px) repeat(2, 1fr)`,
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`,
    }
  };

  const root = rootStyles[mq];
  const avatar = {
    gridArea: "avatar",
  };
  const text = {
    gridArea: "text",
  };
  const current = {
    gridArea: "current",
  };
  const controls = {
    gridArea: "controls",
  };
  const list = {
    gridArea: "list",
  };
  const styles = {
    avatar,
    controls,
    current,
    list,
    root,
    text,
  };

  return styles;
}
