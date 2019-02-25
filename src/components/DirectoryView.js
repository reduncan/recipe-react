import React from 'react';
import SearchForm from './SearchForm';
import RecipeCard from './RecipeCard';
import Grid from '@material-ui/core/Grid';

function DirectoryView(props) {

  return (
    <Grid className="directory" item xs={12} sm={12} md={6}>
        <SearchForm value={props.value} changeHandler={props.changeHandler} clickHandler={props.clickHandler} />
        {props.searchResults.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} clickHandler={props.recipeHandler} key={i} />)}  
    </Grid>
  )
}

export default DirectoryView;