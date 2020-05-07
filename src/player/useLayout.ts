import { useTheme, useMediaQuery } from '@material-ui/core';


// TODO: magic numbers => theme, you know the drill...
export const useLayout = () => {
  const theme = useTheme();
  const rootStyles: {[key: string]: any} = {
    downsm: {
      display: "grid",
      gridTemplateAreas: `
        "avatar text text text text"
        "controls controls controls controls controls"
        "current current current current current"
        "list list list list list"
      `,
      gridTemplateColumns: "128px repeat(4, 1fr)",
      gridTemplateRows: `128px 88px 120px calc(100vh - ${theme.variables.navbar.height * 2}px - 128px - 88px - 120px)`,
    },
    upsm: {
      display: "grid",
      gridTemplateAreas: `
        "avatar avatar text text text"
        "avatar avatar controls controls controls"
        "current current current current current"
        "list list list list list"
      `,
      gridTemplateColumns: "repeat(2, 112px) repeat(3, 1fr)",
      gridTemplateRows: `136px 88px 120px calc(100vh - ${theme.variables.navbar.height * 2}px - 136px - 88px - 120px)`, // TODO: prevent < 0
    },
    upmd: {
      display: "grid",
      gridTemplateAreas: `
        "avatar avatar avatar text text"
        "avatar avatar avatar controls controls"
        "avatar avatar avatar current current"
        "list list list list list"
      `,
      gridTemplateColumns: "repeat(3, 115px) repeat(2, 1fr)",
      gridTemplateRows: `120px 104px 120px calc(100vh - ${theme.variables.navbar.height * 2}px - 120px - 104px - 120px)`,
    }
  };

  let mq = 'downsm';
  mq = useMediaQuery(theme.breakpoints.down('sm')) ? 'downsm' : mq;
  mq = useMediaQuery(theme.breakpoints.up('sm')) ? 'upsm' : mq;
  mq = useMediaQuery(theme.breakpoints.up('md')) ? 'upmd' : mq;

  console.log('###################', mq);

  const root = rootStyles[mq];

  const avatar = {
    gridArea: "avatar"
  };
  const text = {
    gridArea: "text"
  };
  const current = {
    gridArea: "current"
  };
  const controls = {
    gridArea: "controls"
  };
  const list = {
    gridArea: "list"
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
