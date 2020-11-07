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
	bookCards: {
		height: "90%"
	}
}));

const Books = (props: RouteComponentProps) => {
	const classes = useStyles();
	const { history } = props;

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category={"books"} history={history} />
			</Grid>
			<Grid item container direction="column" className={classes.bookCards} justify="space-around">
			</Grid>
		</Grid>
	);
};

export default Books;
