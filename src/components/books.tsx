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
	bookCards: {
		height: "90%"
	}
}));

const Books = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category="books" />
			</Grid>
			<Grid item container direction="column" className={classes.bookCards} justify="space-around">
			</Grid>
		</Grid>
	);
};

export default Books;
