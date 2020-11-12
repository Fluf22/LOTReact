import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	bookCard: {
		width: "100%",
		height: "100%"
	},
	cardRoot: {
		height: "100%",
		padding: "0px !important"
	},
	bookTitle: {
		height: "15%",
		padding: "20px"
	},
	bookTitleText: {
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden"
	},
	chapterCards: {
		height: "75%"
	},
	chapterCard: {
		width: "90%",
		padding: "10px",
		margin: "20px",
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
