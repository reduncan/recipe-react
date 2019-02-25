import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';

const styles = theme => ({
    recipe: {
        fontSize: 28,
        fontFamily: ['Happy Monkey', 'cursive'],
        paddingLeft: 10,
        textAlign: "center"
    },
    box: {
        marginBottom: 25,
        width: 75 + '%',
        marginLeft: 10 + '%'
    }
});

function RecipeCard(props) {

    const { classes } = props;

    return (
        <Box border={2} borderColor="blueviolet" className={classes.box}>
            <p className={classes.recipe} onClick={() => props.clickHandler(props.id)}>{props.name}</p>
        </Box>
    )
}

RecipeCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);