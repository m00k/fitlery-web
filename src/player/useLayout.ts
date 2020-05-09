import { useTheme, useMediaQuery } from '@material-ui/core';

// TODO (cb): useMemo()
const usePageMediaQuery = () => {
  const theme = useTheme();
  const [downsm, upsm, upmd] = [
    theme.breakpoints.down('sm'),
    theme.breakpoints.up('sm'),
    theme.breakpoints.up('md')
  ];
  const mqs = [
    { mq: downsm, matches: useMediaQuery(downsm, {defaultMatches: true}) },
    { mq: upsm, matches: useMediaQuery(upsm) },
    { mq: upmd, matches: useMediaQuery(upmd) },
  ];
  const active = mqs
    .filter(mqi => mqi.matches)
    .map(mqi => mqi.mq)
    .slice(-1)
    [0] || downsm;
  console.log('################', 'mq', active);
  return [active, downsm, upsm, upmd];
};

const useRowHeights = () => {
  const [mq, downsm, upsm, upmd] = usePageMediaQuery();
  const theme = useTheme();
  const text = {
    [downsm]: theme.spacing(16),
    [upsm]: theme.spacing(17),
    [upmd]: theme.spacing(15),
  }[mq];
  const controls = {
    [downsm]: theme.spacing(11),
    [upsm]: theme.spacing(11),
    [upmd]: theme.spacing(13),
  }[mq];
  const current = {
    [downsm]: theme.spacing(15),
    [upsm]: theme.spacing(15),
    [upmd]: theme.spacing(15),
  }[mq];
  return [text, controls, current];
};

export const useLayout = () => {
  const theme = useTheme();
  const [mq, downsm, upsm, upmd] = usePageMediaQuery();
  const [textHeight, controlsHeight, currentHeight] = useRowHeights();
  const totalHeight = textHeight + controlsHeight + currentHeight;
  const listHeight = `minmax(0, calc(100vh - ${theme.variables.navbar.height * 2}px - ${totalHeight}px))`;

  const rootStyles: {[key: string]: any} = {
    [downsm]: {
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
      gridTemplateRows: `${textHeight}px ${controlsHeight}px ${currentHeight}px ${listHeight}`, // TODO: prevent < 0
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
