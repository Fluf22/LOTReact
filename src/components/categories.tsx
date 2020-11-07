import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, createStyles, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => createStyles({
	categorySelector: {
		height: "100%"
	}
}));

interface CategoryProps {
	category?: string;
};

const Categories = ({ category }: CategoryProps) => {
	const classes = useStyles();
	const history = useHistory();
	const [selectedCategory, setCategory] = useState<string>(category ? category.charAt(0).toUpperCase() + category.slice(1) : "");

	useEffect(() => {
		history.push(`/${selectedCategory.toLowerCase()}`);
	}, [selectedCategory, history]);

	return (
		<Grid container direction="row" justify="center" alignItems="center" className={classes.categorySelector}>
			<ButtonGroup color="secondary" aria-label="lotr category selector">
				{
					["", "Characters", "Books", "Movies"].map((catName, idx) => (
						<Button key={idx} variant={selectedCategory === catName ? "contained" : "outlined"} onClick={() => setCategory(catName)}>
							{
								catName !== "" ? catName : "Home"
							}
						</Button>
					))
				}
			</ButtonGroup>
		</Grid>
	);
};

export default Categories;
