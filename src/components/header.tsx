import React, { useState } from 'react';
import { AppBar, Button, createStyles, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { useEventListener } from '../hooks';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		zIndex: 10
	},
	toolBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: {
		marginLeft: theme.spacing(3)
	},
	installButton: {
		marginRight: "13px",
		padding: "0px 15px"
	},
	installButtonIcon: {
		marginLeft: "7px",
		marginBottom: "3px"
	},
	moto: {
		fontStyle: "italic"
	}
}));

const Header = () => {
	const classes = useStyles();
	const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

	useEventListener("beforeinstallprompt", (event: any) => {
		event.preventDefault();
		installAppEvent = event;
		setShowInstallButton(true);
	});

	useEventListener("appinstalled", () => {
		setShowInstallButton(false);
	});

	const handleInstall = () => {
		if (installAppEvent && (installAppEvent as any).prompt && (installAppEvent as any).userChoice) {
			(installAppEvent as any).prompt();
			setShowInstallButton(false);
			(installAppEvent as any).userChoice.then((choiceResult: any) => {
				console.log("choiceResult: ", choiceResult)
				installAppEvent = undefined;
			});
		}
	};

	return (
		<Grid container className={classes.root}>
			<AppBar position="sticky" color="secondary">
				<Toolbar className={classes.toolBar}>
					<Grid container direction="row" justify="space-between" alignItems="center" >
						<Grid item container direction="row" alignItems="center" xs>
							<img src="/logo192.png" height="64" alt="Lord of the rings related app logo" />
							<Typography variant="h3" className={classes.title}>LOTReact</Typography>
						</Grid>
						<Grid item container justify="flex-end" xs>
							{
								showInstallButton ? (
									<Button color="primary" onClick={() => handleInstall()} variant="outlined" className={classes.installButton}>
										Install
										<CloudDownloadIcon className={classes.installButtonIcon} />
									</Button>
								) : ("")
							}
							<Typography variant="h6" className={classes.moto}>The React to rule all the data</Typography>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};

export default Header;
