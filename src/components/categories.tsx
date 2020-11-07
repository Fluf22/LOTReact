import React, { useEffect, useState } from 'react';
import { History } from 'history';
import { Button, ButtonGroup, createStyles, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
	categorySelector: {
		height: "10%"
	}
}));

interface CategoryProps {
	category: string;
	history: History;
};

const Categories = ({ category, history }: CategoryProps) => {
	const classes = useStyles();
	const [selectedCategory, setCategory] = useState<string>(category?.length > 0 ? category.charAt(0).toUpperCase() + category.slice(1) : "");

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
