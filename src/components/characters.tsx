import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Categories from './categories';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	},
	categorySelector: {
		height: "10%"
	},
	characterCards: {
		height: "90%"
	}
}));

const Characters = (props: RouteComponentProps) => {
	const classes = useStyles();
	const { history } = props;

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category={"characters"} history={history} />
			</Grid>
			<Grid item container direction="column" className={classes.characterCards} justify="space-around">
			</Grid>
		</Grid>
	);
};

export default Characters;
