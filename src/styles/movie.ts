import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	movieCard: {
		width: "100%",
		height: "100%"
	},
	cardRoot: {
		height: "100%",
		padding: "0px !important",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	movieTitle: {
		padding: "20px",
		flexWrap: "nowrap",
	},
	quoteCards: {
		overflowY: "auto",
		justifyContent: "start",
		alignItems: "center",
		flexGrow: 1
	},
	quoteContainer: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%"
	},
	quoteCard: {
		width: "calc(100% - 20px)",
		margin: "10px",
		display: "flex",
		padding: "10px",
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
