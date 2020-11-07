import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, createStyles, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
	categorySelector: {
		height: "10%"
	}
}));

interface CategoryProps {
	onChange: (category: string) => void;
};

const Categories = ({ onChange }: CategoryProps) => {
	const classes = useStyles();
	const [selectedCategory, setCategory] = useState<string>("Home");

	useEffect(() => {
		onChange(selectedCategory);
	}, [selectedCategory, onChange]);

	return (
		<Grid container direction="row" justify="center" alignItems="center" className={classes.categorySelector}>
			<ButtonGroup color="secondary" aria-label="lotr category selector">
				{
					["Home", "Characters", "Books", "Movies"].map((catName, idx) => (
						<Button key={idx} variant={selectedCategory === catName ? "contained" : "outlined"} onClick={() => setCategory(catName)}>
							{
								catName
							}
						</Button>
					))
				}
			</ButtonGroup>
		</Grid>
	);
};

export default Categories;
