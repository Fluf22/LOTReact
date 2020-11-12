import React, { useState } from 'react';
import { AppBar, Button, Grid, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { useEventListener } from '../hooks';
import useStyles from '../styles/header';

const Header = () => {
	const isMobile = useMediaQuery('(max-width:555px)');
	const classes = useStyles(isMobile);
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
						<Grid item container justify="flex-end" xs className={classes.installButtonContainer}>
							{
								showInstallButton ? (
									<Button color="primary" onClick={() => handleInstall()} variant="outlined" className={classes.installButton}>
										Install
										<CloudDownloadIcon className={classes.installButtonIcon} />
									</Button>
								) : ("")
							}
							{
								isMobile ? ("") : (
									<Typography variant="h6" className={classes.moto}>The React to rule all the data</Typography>
								)
							}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};

export default Header;
