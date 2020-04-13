import { style } from '@material-ui/system';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const gridColumn = style({prop: 'gridColumn'});
const gridRow = style({prop: 'gridRow'});
const gridTemplateColumns = style({prop: 'gridTemplateColumns'});
const gridTemplateRows = style({prop: 'gridTemplateRows'});

const GridItem = styled(Box)`${gridColumn}${gridRow}${gridTemplateColumns}${gridTemplateRows}`;

export default GridItem;