import React, { Suspense } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { CircularProgress, createStyles, Grid, makeStyles } from '@material-ui/core';
import Header from './header';
import Main from './main';
import ErrorBoundary from './error-boundary';
import Categories from './categories';
import ServiceWorkerWrapper from './service-worker-wrapper';

const Characters = React.lazy(() => import('./characters'));
const Books = React.lazy(() => import('./books'));
const Movies = React.lazy(() => import('./movies'));
const NotFound = React.lazy(() => import('./not-found'));

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	body: {
		height: "calc(100% - 64px)"
	},
	categorySelector: {
		height: "10%"
	},
	slug: {
		height: "90%"
	},
	fallback: {
		height: "calc(100% - 64px)"
	}
}));

interface HomeRouteProps {
	slug?: string;
};

const Home = (props: RouteComponentProps<HomeRouteProps>) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Header />
			<Grid item container direction="column" className={classes.body}>
				<Grid item className={classes.categorySelector}>
					<Categories category={props.match.params.slug} />
				</Grid>
				<Grid item container direction="row" className={classes.slug}>
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
			</Grid>
			<ServiceWorkerWrapper />
		</Grid>
	);
};

export default Home;
