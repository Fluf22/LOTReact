import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Route path="/" component={Home} />
			</Router>
		</ThemeProvider>
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
