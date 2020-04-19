import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const calcPoint = (r: number = 1, cx: number = 0, cy: number = 0, percent: number) => {
  return [
    cx + Math.sin(2 * Math.PI * percent) * r,
    cy - Math.cos(2 * Math.PI * percent) * r,
  ];
};

// TODO: useMemo?
function calcArc(pFrom: number, pTo: number, r: number = 1, cx: number = 0, cy: number = 0) {
  const calcPointR = calcPoint.bind(null, r, cx, cy);
  const [startX, startY] = calcPointR(pFrom);
  const [endX, endY] = calcPointR(pTo);
  const largeArcFlag = Math.round(pTo - pFrom);
  return {
    startX,
    startY,
    endX,
    endY,
    largeArcFlag
  };
}

const Background = () => {
  const theme = useTheme();
  return <circle r="1" fill={theme.palette.background.paper} />;
}

interface ArcProps {
  from: number;
  to: number;
  r?: number;
  cx?: number;
  cy?: number;
  fill?: string;
}

const Arc = (props: any) => {
  const {from, to, r = 1, cx = 0, cy = 0, fill = 'currentColor'} = props;
  const {startX, startY, endX, endY, largeArcFlag} = calcArc(from, to, r, cx, cy);
  const d = 
    `M ${startX} ${startY} ` +
    `A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY} ` +
    `L ${cx} ${cy}`
  ;
  return (
    <path
      fill={fill}
      d={d}
    />
  );
};

const GoAvatar = (props: any) => {
  const { percentDone } = props;
  const theme = useTheme();

  return (
    <Box
      display='grid'
      alignItems='center'
      justifyContent='center'
      bgcolor={theme.palette.primary.main}
      p={1}
    >
      <svg
        width="100%" 
        viewBox="-1 -1 2 2"
      >
        {!percentDone
          ? <Background/>
          : <>
              <Arc
                fill={theme.palette.primary.light}
                from={0}
                to={percentDone}
              />
              <Arc
                fill={theme.palette.background.paper}
                from={percentDone}
                to={1}
              />
            </>
        }
      </svg>

    </Box>
  );
};

export default GoAvatar;
