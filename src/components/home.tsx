import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import NotFound from './not-found';
import { createStyles, Grid, makeStyles } from '@material-ui/core';
import Main from './main';
import Characters from './characters';

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Header />
			<Switch>
				<Route path="/" component={Main} />
				<Route path="/characters" component={Characters} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Grid>
	);
};

export default Home;
