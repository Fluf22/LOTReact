import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	categorySelector: {
		height: "10%"
	},
	main: {
		height: "95%",
		maxWidth: "2000px",
		alignSelf: "center",
		overflowY: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		flexWrap: "nowrap"
	},
	searchBar: {
		height: "10%",
		paddingLeft: "70px"
	},
	searchBarInput: {
		backgroundColor: "#896f4c",
		borderRadius: "5px"
	},
	characterCards: {
		height: "90%"
	},
	characterCard: {
		width: "310px",
		height: "170px",
		flexGrow: 1,
		margin: "22px"
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
