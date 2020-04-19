import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const calcPoint = (r: number = 1, cx: number = 0, cy: number = 0, percent: number) => {
  return [
    cx + Math.sin(2 * Math.PI * percent) * r,
    cy - Math.cos(2 * Math.PI * percent) * r,
  ];
};

function calcArc(pFrom: number, pTo: number, r: number = 1, cx: number = 0, cy: number = 0) {
  const calcPointR = calcPoint.bind(null, r, cx, cy);
  const [startX, startY] = calcPointR(pFrom);
  const [endX, endY] = calcPointR(pTo);
  const largeArcFlag = Math.round(pTo - pFrom);
  return {
    r,
    cx,
    cy,
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

const Arc = (props: any) => {
  const {r, cx, cy, startX, startY, endX, endY, largeArcFlag, fill} = props;
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
  const arc1 = calcArc(0, percentDone);
  const arc2 = calcArc(percentDone, 1);

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
                {...arc1}
              />
              <Arc
                fill={theme.palette.background.paper}
                {...arc2}
              />
            </>
        }
      </svg>

    </Box>
  );
};

export default GoAvatar;
