import React from 'react';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import Categories from './categories';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	},
	categorySelector: {
		height: "10%"
	},
	description: {
		padding: theme.spacing(3),
		height: "90%"
	},
	paragraph: {
		height: "30%"
	},
	paragraphText: {
		paddingLeft: theme.spacing(3)
	}
}));

const Main = () => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.categorySelector}>
				<Categories />
			</Grid>
			<Grid item container direction="column" className={classes.description} justify="space-around">
				<Grid item container direction="column" justify="space-evenly" className={classes.paragraph}>
					<Grid item>
						<Typography variant="h4">
							Purpose
						</Typography>
					</Grid>
					<Grid item className={classes.paragraphText}>
						<Typography>
							This Progressive Web App (PWA) allows you to access many data about the well-known universe of The Lord of The Rings.
						</Typography>
						<Typography>
							Select a category to begin looking for LOTR characters, books or movies.The movie category give you the ability to search quotes.
						</Typography>
						<Typography>
							The movie category also give you the ability to search quotes, and the book category, specific chapters.
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" justify="space-evenly" className={classes.paragraph}>
					<Grid item>
						<Typography variant="h4">
							Technical stack
						</Typography>
					</Grid>
					<Grid item className={classes.paragraphText}>
						<Typography>
							This website has been done with React, React Router, React queries and a service worker to be cacheable as well as accessible offline.
						</Typography>
						<Typography>
							Everything is hosted on Netlify.
						</Typography>
						<Typography>
							Thanks to <a href="https://the-one-api.dev/" target="_blank" rel="noreferrer">The One API</a> to kindly provide the data.
						</Typography>
					</Grid>
				</Grid>
				<Grid item container direction="column" justify="space-evenly" className={classes.paragraph}>
					<Grid item>
						<Typography variant="h4">
							About
						</Typography>
					</Grid>
					<Grid item className={classes.paragraphText}>
						<Typography>
							My name is Thomas Raffray, and I'm a full-stack developer.
						</Typography>
						<Typography>
							Here is <a href="https://www.linkedin.com/in/thomas-raffray-66a570123/" target="_blank" rel="noreferrer">my LinkedIn page</a>, and <a href="https://github.com/Fluf22/LOTReact" target="_blank" rel="noreferrer">the Github repository</a>, if you want to look at the code.
						</Typography>
						<Typography>
							<a href="/assets/cv-thomas-raffray-2020.pdf" target="_blank" rel="noreferrer">Click here to download my resume!</a> (FR)
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Main;
