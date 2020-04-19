import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

function calcPoint(percent: number) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

function calcArc(percent: number) {
  const [startX, startY] = calcPoint(0);
  const [endX, endY] = calcPoint(percent);
  const largeArcFlag = percent > .5 ? 1 : 0; // if the slice is more than 50%, take the large arc (the long way around)
  return {startX, startY, endX, endY, largeArcFlag}
}

const Background = () => {
  const theme = useTheme();
  return <circle r="1" fill={theme.palette.background.paper} />;
}

const Done = (props: any) => {
  const theme = useTheme();
  const {startX, startY, endX, endY, largeArcFlag} = props;
  return (
    <path
      fill={theme.palette.primary.light}
      d={
        `M ${startX} ${startY}` +
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}` +
        `L 0 0`
      }
    />
  );
};

const Left = (props: any) => {
  const theme = useTheme();
  const {startX, startY, endX, endY, largeArcFlag} = props;
  return (
    <path
      fill={theme.palette.background.paper}
      d={
        `M ${endX} ${endY}` +
        `A 1 1 0 ${Math.abs(1 - largeArcFlag)} 1 ${startX} ${startY}` +
        `L 0 0`
      }
    />
  );
};

const GoAvatar = (props: any) => {
  const { percentDone } = props;
  const theme = useTheme();
  const arc = calcArc(percentDone);

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
        style={{
          transform: 'rotate(-90deg)',
        }}
      >
        {!percentDone
          ? <Background/>
          : <>
              <Done {...arc}/>
              <Left {...arc}/>
            </>
        }
      </svg>

    </Box>
  );
};

export default GoAvatar;
