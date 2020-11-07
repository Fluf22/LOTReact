import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Categories from './categories';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	}
}));

const Movies = (props: RouteComponentProps) => {
	const classes = useStyles();
	const { history } = props;

	return (
		<Grid container direction="column" className={classes.root}>
			<Categories category={"movies"} history={history} />
		</Grid>
	);
};

export default Movies;
