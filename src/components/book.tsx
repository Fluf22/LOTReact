import React, { useEffect } from 'react';
import { Card, CardContent, Typography, createStyles, makeStyles, Grid, CircularProgress, Paper } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useChapters } from '../queries';
import { usePagination } from '../hooks';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(() => createStyles({
	bookCard: {
		width: "60%",
		height: "90%"
	},
	cardRoot: {
		height: "100%",
		padding: "0"
	},
	bookTitle: {
		height: "15%",
		padding: "20px"
	},
	chapterCards: {
		height: "75%"
	},
	chapterCard: {
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

interface BookProps {
	book: {
		_id: string;
		name: string;
	};
};

const Book = ({ book }: BookProps) => {
	const classes = useStyles();
	const { isLoading, isError, error, data } = useChapters(book?._id ?? "");
	const {
		isPaginationReady,
		paginatedData: chapters,
		pageCount,
		pageIndex,
		onPaginationChange
	} = usePagination(data?.docs ?? [], 4);

	useEffect(() => {
		if (isError) {
			console.error("Error during books query: ", error);
		}
	}, [isError, error]);

	useEffect(() => {
		onPaginationChange(1);
	}, [book, onPaginationChange]);

	return (
		<Card className={classes.bookCard}>
			<CardContent className={classes.cardRoot}>
				<Grid item className={classes.bookTitle}>
					<Typography variant="h3">
						{book.name}
					</Typography>
				</Grid>
				<Grid item container direction="column" className={classes.chapterCards} justify="space-around" alignItems="center">
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
										chapters.map((chapter: any, idx: number) => (
											<Paper key={idx} color="primary" elevation={3} className={classes.chapterCard}>
												<Typography>{`Chapter ${(pageIndex - 1) * 4 + idx + 1}: ${chapter.chapterName}`}</Typography>
											</Paper>
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
			</CardContent>
		</Card>
	);
};

export default Book;
