import React, { useEffect } from 'react';
import { CircularProgress, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useMovies } from '../queries';
import Categories from './categories';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	},
	categorySelector: {
		height: "10%"
	},
	movieCards: {
		height: "90%"
	},
	loader: {
		height: "100%",
		width: "100%"
	},
	errorIcon: {
		fontSize: "80px",
	},
	errorText: {
		fontSize: "40px",
	}
}));

const Movies = () => {
	const classes = useStyles();
	const { isLoading, isError, error, data } = useMovies();

	useEffect(() => {
		if (isError) {
			console.error("Error during movies query: ", error);
		}
	}, [isError, error]);

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category="movies" />
			</Grid>
			<Grid item container direction="column" className={classes.movieCards} justify="space-around">
			{
					isLoading ? (
						<Grid item container justify="center" alignItems="center" className={classes.loader}>
							<CircularProgress color="secondary" />
						</Grid>
					) : (
							isError ? (
								<Grid item container direction="column" justify="center" alignItems="center">
									<WarningIcon className={classes.errorIcon} />
									<Typography className={classes.errorIcon}>An error as occured</Typography>
									<Typography className={classes.errorIcon}>Please reload the page</Typography>
								</Grid>
							) : (
								data.docs.map((movie: any, idx: number) => (
									<div key={idx}>{JSON.stringify(movie, null, 4)}</div>
								))
							)
						)
				}
			</Grid>
		</Grid>
	);
};

export default Movies;
