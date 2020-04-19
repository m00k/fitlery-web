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
  // if the slice is more than 50%, take the large arc (the long way around)
  const largeArcFlag = percent > .5 ? 1 : 0;
  return [startX, startY, endX, endY, largeArcFlag]
}

const GoAvatar = (props: any) => {
  const { percentDone } = props;
  const theme = useTheme();
  const [startX, startY, endX, endY, largeArcFlag] = calcArc(percentDone);

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
        <path
          fill={theme.palette.secondary.dark}
          d={`M ${startX} ${startY}
            A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
            L 0 0`}
        />
        <path
          fill={theme.palette.background.paper}
          d={`M ${endX} ${endY}
            A 1 1 0 ${Math.abs(1 - largeArcFlag)} 1 ${startX} ${startY}
            L 0 0`}
        />
      </svg>
      
    </Box>
  );
};

export default GoAvatar;

/*
const svgEl = document.querySelector('svg');
const slices = [
  { percent: 0.1, color: 'Indigo' },
];
let cumulativePercent = 0;

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

slices.forEach(slice => {
  // destructuring assignment sets the two variables at once
  const [startX, startY] = [1,0]; //getCoordinatesForPercent(0);
  
  const [endX, endY] = [0,-1]

  // if the slice is more than 50%, take the large arc (the long way around)
  const largeArcFlag = 1// slice.percent > .5 ? 1 : 0;

	// create an array and join it just for code readability
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ');

  // create a <path> and append it to the <svg> element
  const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d', pathData);
  pathEl.setAttribute('fill', slice.color);
  svgEl.appendChild(pathEl);
});
*/