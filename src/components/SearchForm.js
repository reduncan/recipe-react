import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  
});

function SearchForm(props) {

  const { classes } = props;

  return (
    <form>
        <input value={props.value} onChange={props.changeHandler} />
        <button onClick={props.clickHandler}>Search</button>
    </form>
  )
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);