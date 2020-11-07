import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import { CircularProgress, createStyles, Grid, makeStyles } from '@material-ui/core';
import Main from './main';
import ErrorBoundary from './error-boundary';

const Characters = React.lazy(() => import('./characters'));
const Books = React.lazy(() => import('./books'));
const Movies = React.lazy(() => import('./movies'));
const NotFound = React.lazy(() => import('./not-found'));

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	fallback: {
		height: "calc(100% - 64px)"
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Header />
			<ErrorBoundary>
				<Suspense fallback={
					<Grid container justify="center" alignItems="center" className={classes.fallback}>
						<CircularProgress color="secondary" />
					</Grid>
				}>
					<Switch>
						<Route exact path="/movies" component={Movies} />
						<Route exact path="/books" component={Books} />
						<Route exact path="/characters" component={Characters} />
						<Route exact path="/" component={Main} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</Grid>
	);
};

export default Home;
