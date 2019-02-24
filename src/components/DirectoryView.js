import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchForm from './components/SearchForm';
import RecipeCard from './components/RecipeCard';

const styles = theme => ({
  
});

function DirectoryView(props) {

  const { classes } = props;

  return (
    <div className="directory">
        <SearchForm value={props.value} changeHandler={props.changeHandler} clickHandler={props.clickHandler} />
        {props.searchResults.map((recipe, i) => <RecipeCard name={recipe.name} id={recipe.id} clickHandler={props.recipeHandler} key={i} />)}  
    </div>
  )
}

DirectoryView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DirectoryView);