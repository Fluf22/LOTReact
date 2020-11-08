import React, { useEffect } from 'react';
import { Card, CardContent, Typography, createStyles, makeStyles, Grid, CircularProgress, Paper } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useQuotes } from '../queries';
import { usePagination } from '../hooks';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(() => createStyles({
	movieCard: {
		width: "60%",
		height: "90%"
	},
	cardRoot: {
		height: "100%",
		padding: "0"
	},
	movieTitle: {
		height: "25%",
		padding: "20px"
	},
	quoteCards: {
		height: "65%"
	},
	quoteCard: {
		width: "90%",
		padding: "20px"
	},
	pagination: {
		height: "10%",
		backgroundColor: "#ffffff"
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

interface MovieProps {
	movie: {
		_id: string;
		name: string;
		academyAwardWins: number;
		academyAwardNominations: number;
		rottenTomatesScore: number;
	};
};

const Movie = ({ movie }: MovieProps) => {
	const classes = useStyles();
	const { isLoading, isError, error, data } = useQuotes(movie?._id ?? "");
	const {
		isPaginationReady,
		paginatedData: quotes,
		pageCount,
		pageIndex,
		onPaginationChange
	} = usePagination(data?.docs ?? [], 4);

	useEffect(() => {
		if (isError) {
			console.error("Error during movies query: ", error);
		}
	}, [isError, error]);

	return (
		<Card className={classes.movieCard}>
			<CardContent className={classes.cardRoot}>
				<Grid item container className={classes.movieTitle} direction="column">
					<Grid item container direction="row" justify="space-between" alignItems="center">
						<Typography variant="h3">
							{movie.name}
						</Typography>
					</Grid>
					<Grid item container direction="row" justify="space-between" alignItems="center">
						<Typography variant="h5">
							{`${movie.academyAwardWins} awards won of ${movie.academyAwardNominations} nominations`}
						</Typography>
						<Typography variant="h6">
							{`${Math.trunc(movie.rottenTomatesScore)}% score on Rotten Tomatoes`}
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" className={classes.quoteCards} justify="space-around" alignItems="center">
					{
						isLoading ? (
							<Grid item container justify="center" alignItems="center" className={classes.loader}>
								<CircularProgress color="primary" />
							</Grid>
						) : (
								isError ? (
									<Grid item container direction="column" justify="center" alignItems="center">
										<WarningIcon className={classes.errorIcon} />
										<Typography className={classes.errorIcon}>An error as occured</Typography>
										<Typography className={classes.errorIcon}>Please reload the page</Typography>
									</Grid>
								) : (
										quotes.length === 0 ? (
											<Grid item>
												Quotes are only available for the original Lord of the Rings trilogy
											</Grid>
										) : (
											quotes.map((quote: any, idx: number) => (
												<Paper key={idx} color="primary" elevation={3} className={classes.quoteCard}>
													<Typography>{`${(pageIndex - 1) * 4 + idx + 1}: ${quote.dialog}`}</Typography>
												</Paper>
											))
										)
									)
							)
					}
				</Grid>
				{
					isPaginationReady ? (
						<Grid item container justify="center" alignItems="center" className={classes.pagination}>
							<Pagination variant="text" color="primary" boundaryCount={2} count={pageCount} page={pageIndex} onChange={(_, page) => onPaginationChange(page)} />
						</Grid>
					) : ("")
				}
			</CardContent>
		</Card>
	);
};

export default Movie;