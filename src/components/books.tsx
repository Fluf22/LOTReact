import React, { useEffect } from 'react';
import { CircularProgress, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useBooks } from '../queries';
import { usePagination } from '../hooks';
import { Pagination } from '@material-ui/lab';
import Book from './book';

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	categorySelector: {
		height: "10%"
	},
	bookCards: {
		height: "85%"
	},
	bookCard: {
		width: "60%",
		height: "90%"
	},
	bookTitle: {
		margin: "20px"
	},
	accordionHeading: {
		fontSize: "22px"
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

const Books = () => {
	const classes = useStyles();
	const { isLoading, isError, error, data } = useBooks();
	const {
		isPaginationReady,
		paginatedData: books,
		pageCount,
		pageIndex,
		onPaginationChange
	} = usePagination(data?.docs ?? [], 1);

	useEffect(() => {
		if (isError) {
			console.error("Error during books query: ", error);
		}
	}, [isError, error]);

	return (
		<Grid container direction="column" className={classes.root} justify="space-between">
			<Grid item container direction="column" className={classes.bookCards} justify="space-around" alignItems="center">
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
									books.map((book: any, idx: number) => (
										<Book key={idx} book={book} />
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

export default Books;
