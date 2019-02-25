import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    name: {
        fontSize: 28,
        fontFamily: ['Happy Monkey', 'cursive'],
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: ['Lobster', 'cursive'],
        marginLeft: 20
    },
    list: {
        fontSize: 16,
        fontFamily: ['Happy Monkey', 'cursive']
    }

});

function DetailView(props) {

    const { classes } = props;

    return (
        <Grid className="detail" container item xs={12} sm={12} md={6}>
            <Grid item xs={12}>
                <h1 className={classes.name}>{props.recipe.name}</h1>
            </Grid>
            <Grid item xs={false} sm={false} md={1}></Grid>
            <Grid item xs={12} sm={12} md={5}>
                <h2 className={classes.title}>{props.recipe.ingredient}</h2>
                <ul className={classes.list}>
                    {props.recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
                <h2 className={classes.title}>{props.recipe.instruction}</h2>
                <ol className={classes.list}>
                    {props.recipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
                </ol>
            </Grid>
            <Grid item xs={false} sm={false} md={1}></Grid>
        </Grid >
    )
}

DetailView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailView);