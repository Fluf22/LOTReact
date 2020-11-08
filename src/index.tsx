import React from 'react';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { CssBaseline, ThemeProvider, Theme, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import './styles/core.css';
// import reportWebVitals from './reportWebVitals';

global.installAppEvent = undefined;

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: "#896f4c",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#ffffff",
			contrastText: "#251d18"
		}
	}
});

const queryCache = new QueryCache();

ReactDOM.render(
	<React.Fragment>
		<ReactQueryCacheProvider queryCache={queryCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Route path="/:slug?" component={Home} />
				</Router>
			</ThemeProvider>
			{
				process.env.NODE_ENV === "development" ? (
					<ReactQueryDevtools initialIsOpen />
				) : ("")
			}
		</ReactQueryCacheProvider>
	</React.Fragment>,
	document.getElementById('root')
);

// reportWebVitals();
