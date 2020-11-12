import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	categorySelector: {
		height: "10%"
	},
	bookCards: {
		height: "95%",
		padding: "20px"
	},
	bookCard: {
		width: "60%",
		height: "90%"
	},
	bookTitle: {
		margin: "20px"
	},
	accordionHeading: {
		fontSize: "22px"
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

export default useStyles;
