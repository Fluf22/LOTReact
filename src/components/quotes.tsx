import React, { useEffect } from 'react';
import { CircularProgress, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useQuotes } from '../queries';
import Categories from './categories';
import { usePagination } from '../hooks';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	},
	categorySelector: {
		height: "10%"
	},
	quotesCards: {
		height: "85%"
	},
	pagination: {
		height: "5%",
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

const Quotes = () => {
	const classes = useStyles();
	const { isLoading, isError, error, data } = useQuotes();
	const {
		isPaginationReady,
		paginatedData: quotes,
		pageCount,
		pageIndex,
		onPaginationChange
	} = usePagination(data?.docs ?? [], 25);

	useEffect(() => {
		if (isError) {
			console.error("Error during quotes query: ", error);
		}
	}, [isError, error]);

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category="quotes" />
			</Grid>
			<Grid item container direction="column" className={classes.quotesCards} justify="space-around">
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
								quotes.map((quote: any, idx: number) => (
									<div key={idx}>{JSON.stringify(quote, null, 4)}</div>
								))
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
		</Grid>
	);
};

export default Quotes;
