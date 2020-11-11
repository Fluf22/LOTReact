import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	movieCard: {
		width: "60%",
		height: "90%",
		minHeight: "540px",
		minWidth: "700px"
	},
	cardRoot: {
		height: "100%",
		padding: "0"
	},
	movieTitle: {
		height: "25%",
		padding: "20px"
	},
	quoteCards: {
		height: "65%"
	},
	quoteCard: {
		width: "90%",
		padding: "1.5%",
		margin: "1.5%",
		display: "flex",
		flexGrow: 1,
		alignItems: "center"
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

export default useStyles;
