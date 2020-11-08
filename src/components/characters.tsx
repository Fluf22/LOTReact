import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CircularProgress, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { useCharacters } from '../queries';
import Categories from './categories';
import { Pagination } from '@material-ui/lab';
import { usePagination } from '../hooks';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	},
	categorySelector: {
		height: "10%"
	},
	characterCards: {
		height: "85%",
		padding: "70px"
	},
	characterCard: {
		width: "300px",
		height: "170px"
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

const Characters = () => {
	const classes = useStyles();
	const { isLoading, isError, error, data } = useCharacters();
	const {
		isPaginationReady,
		paginatedData: characters,
		pageCount,
		pageIndex,
		onPaginationChange
	} = usePagination(data?.docs ?? []);

	useEffect(() => {
		if (isError) {
			console.error("Error during characters query: ", error);
		}
	}, [isError, error]);

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories category="characters" />
			</Grid>
			<Grid item container direction="row" justify="space-between" className={classes.characterCards}>
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
									characters.map((character: any, idx: number) => (
										<Card key={idx} className={classes.characterCard}>
											<CardContent>
												<Typography color="textSecondary" gutterBottom>
													{character.race}
												</Typography>
												<Typography variant="h5" component="h2">
													{character.name}
												</Typography>
												<Typography color="textSecondary">
													{character.gender}
												</Typography>
												<Typography variant="body2" component="p">
												</Typography>
											</CardContent>
											{
												character.wikiUrl !== "" ? (
													<CardActions>
														<Button onClick={() => window.open(character.wikiUrl, '_blank')} size="small">Learn More</Button>
													</CardActions>
												) : ("")
											}
										</Card>
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

export default Characters;
