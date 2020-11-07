import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
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

const Characters = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category="characters" />
			</Grid>
			<Grid item container direction="column" className={classes.characterCards} justify="space-around">
			</Grid>
		</Grid>
	);
};

export default Characters;
