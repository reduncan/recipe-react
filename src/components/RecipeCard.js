import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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
        marginLeft: 10 + '%',
        boxShadow: '0 3px 5px 2px rgba(138, 43, 226, .5)'    
    }
});

function RecipeCard(props) {

    const { classes } = props;

    return (
        <Card className={classes.box}>
            <p className={classes.recipe} onClick={() => props.clickHandler(props.id)}>{props.name}</p>
        </Card>
    )
}

RecipeCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);