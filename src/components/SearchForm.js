import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    textField: {
        width: 100 + '%'
    },
    button: {
        width: 100,
        marginLeft: 20,
        marginTop: 18,
        height: 50,
        color: "white",
        backgroundColor: "blueviolet"
    }
});

function SearchForm(props) {

    const { classes } = props;

    return (
        <Grid container>
            <Grid item xs={false} sm={false} md={2}></Grid>
            <Grid item xs={8} sm={8} md={6}>
                <TextField
                    id="outlined-search"
                    label="Keyword"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={props.value}
                    onChange={props.changeHandler}
                />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
                <Button
                    variant="contained"
                    onClick={props.clickHandler}
                    type="submit"
                    className={classes.button}>
                    Search
                    <SearchIcon className={classes.SearchIcon} />
                </Button>
            </Grid>
            <Grid item xs={false} sm={false} md={2}></Grid>
        </Grid>
    )
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);