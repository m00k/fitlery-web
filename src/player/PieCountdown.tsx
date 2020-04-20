import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { useMemo } from 'react';

const calcPoint = (r: number = 1, cx: number = 0, cy: number = 0, percent: number) => {
  return [
    cx + Math.sin(2 * Math.PI * percent) * r,
    cy - Math.cos(2 * Math.PI * percent) * r,
  ];
};

const useArc: (...args: any) => D = (pFrom: number, pTo: number, r: number = 1, cx: number = 0, cy: number = 0) => {
  return useMemo(() => {
    const calcPointR = calcPoint.bind(null, r, cx, cy);
    const [startX, startY] = calcPointR(pFrom);
    const [endX, endY] = calcPointR(pTo);
    const largeArcFlag = Math.round(pTo - pFrom) as 0 | 1;
    return {
      startX,
      startY,
      endX,
      endY,
      largeArcFlag,
    };
  }, [pFrom, pTo, r, cx, cy]);
}

interface D {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  largeArcFlag: 0 | 1;
}

interface ArcProps extends React.SVGProps<SVGPathElement> {
  from: number;
  to: number;
  r?: number;
  cx?: number;
  cy?: number;
}

const Arc = (props: ArcProps) => {
  const { from, to, r = 1, cx = 0, cy = 0, fill = 'currentColor' } = props;
  const { startX, startY, endX, endY, largeArcFlag } = useArc(from, to, r, cx, cy);
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

const Background = () => {
  const theme = useTheme();
  return <circle r="1" fill={theme.palette.background.paper} />;
}

const PieCountdown = (props: any) => {
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
          ? <Background />
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

export default PieCountdown;
