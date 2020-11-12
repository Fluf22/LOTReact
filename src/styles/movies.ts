import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	categorySelector: {
		height: "10%"
	},
	movieCards: {
		height: "95%",
		padding: "0 20px 20px"
	},
	loader: {
		height: "100%",
		width: "100%"
	},
	pagination: {
		height: "5%",
		backgroundColor: "#ffffff"
	},
	errorIcon: {
		fontSize: "80px",
	},
	errorText: {
		fontSize: "40px",
	}
}));

export default useStyles;
