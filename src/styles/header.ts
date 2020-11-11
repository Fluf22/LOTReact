import { makeStyles, createStyles } from "@material-ui/core";

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

export default useStyles;
