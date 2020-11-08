import React from 'react';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { CssBaseline, ThemeProvider, Theme, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import './styles/core.css';

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
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
