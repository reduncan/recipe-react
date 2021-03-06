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
        border: '2px solid blueviolet',
        marginTop: 20,
        marginBottom: 5,
        width: 75 + '%',
        marginLeft: 10 + '%'
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