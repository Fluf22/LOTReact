import React, { Suspense } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';
import Header from './header';
import Main from './main';
import ErrorBoundary from './error-boundary';
import Categories from './categories';
import ServiceWorkerWrapper from './service-worker-wrapper';
import useStyles from '../styles/home';

const Characters = React.lazy(() => import('./characters'));
const Books = React.lazy(() => import('./books'));
const Movies = React.lazy(() => import('./movies'));
const NotFound = React.lazy(() => import('./not-found'));

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
