import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)"
	},
	description: {
		padding: theme.spacing(3),
		height: "90%"
	},
	paragraph: {
		height: "30%"
	},
	paragraphText: {
		paddingLeft: theme.spacing(3)
	}
}));

export default useStyles;
