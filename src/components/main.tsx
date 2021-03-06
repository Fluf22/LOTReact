import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useStyles from '../styles/main';

const Main = () => {
	const classes = useStyles();

	return (
		<Grid item container direction="column" className={classes.description} justify="space-around">
			<Helmet>
				<title>Home - LOTReact</title>
				<meta name="description" content="Homepage of LOTReact" />
			</Helmet>
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
						Select a category to begin looking for LOTR characters, books or movies.
					</Typography>
					<Typography>
						The movie category also gives you the ability to search quotes, and the book category, specific chapters.
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
						This website has been done with React, React Router, React queries, fuse.js for the fuzzy search and a service worker to be cacheable as well as accessible offline.
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
						Here is <a href="https://www.linkedin.com/in/thomas-raffray/" target="_blank" rel="noreferrer">my LinkedIn page</a>, and <a href="https://github.com/Fluf22/LOTReact" target="_blank" rel="noreferrer">the Github repository</a>, if you want to look at the code.
					</Typography>
					<Typography>
						<a href="/assets/cv-thomas-raffray-en.pdf" target="_blank" rel="noreferrer">Click here to download my resume!</a> (EN)
					</Typography>
					<Typography>
						<a href="/assets/cv-thomas-raffray-fr.pdf" target="_blank" rel="noreferrer">Cliquez ici pour télécharger mon CV !</a> (FR)
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Main;
