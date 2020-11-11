import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress, Paper } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useChapters } from '../queries';
import { usePagination } from '../hooks';
import { Pagination } from '@material-ui/lab';
import useStyles from '../styles/book';

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
					<Typography variant="h3" className={classes.bookTitleText} title={book.name}>
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
