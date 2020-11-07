import { Grid } from '@material-ui/core';
import React from 'react';
import Categories from './categories';

const Characters = () => {
	return (
		<Grid container direction="column">
			<Categories onChange={(category) => console.log(`Load category ${category}`)} />
		</Grid>
	);
};

export default Characters;
