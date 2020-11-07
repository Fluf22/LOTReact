import React from 'react';
import { AppBar, createStyles, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
	toolBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: {
		marginLeft: theme.spacing(3)
	},
	moto: {
		fontStyle: "italic"
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Grid container>
			<AppBar position="sticky" color="secondary">
				<Toolbar className={classes.toolBar}>
					<Grid container direction="row" justify="space-between" alignItems="center" >
						<Grid item container direction="row" alignItems="center" xs>
							<img src="/logo192.png" height="64" alt="Lord of the rings related app logo" />
							<Typography variant="h3" className={classes.title}>LOTReact</Typography>
						</Grid>
						<Grid item container justify="flex-end" xs>
							<Typography variant="h6" className={classes.moto}>The React to rule all the data</Typography>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};

export default Header;
