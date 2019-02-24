import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  
});

function RecipeCard(props) {

  const { classes } = props;

  return (
    <p className="recipe" onClick={() => props.clickHandler(props.id)}>{props.name}</p>
  )
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);