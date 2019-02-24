import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  
});

function DetailView(props) {

  const { classes } = props;

  return (
    <div className="detail">
        <div>
            <div>
                <p className="center name">{props.recipe.name}</p>
                <div>
                    <h2>{props.recipe.ingredient}</h2>
                    <ul>
                        {props.recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                    </ul>
                </div>
                <div>
                    <h2>{props.recipe.instruction}</h2>
                    <ol>
                        {props.recipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

DetailView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailView);