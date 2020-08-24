import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import theme from './theme/theme';

test('renders', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
  const toolbar = getByText(/fitlery/i);
  expect(toolbar).toBeInTheDocument();
});
