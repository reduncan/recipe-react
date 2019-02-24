import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../src/cutlery-circle.png';

const styles = theme => ({
  AppBar: {
    backgroundColor: 'blueviolet',
    height: 100,
    fontSize: 38,
    color: 'white',
    fontFamily: ['Lobster', 'cursive']
  },
  img: {
    margin: 10
  },
  p: {
    marginLeft: 10,
    marginTop: 31
  }
});

function Header(props) {

  const { classes } = props;

  return (
    <div className="header">
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar classes>
          <img src={logo} alt={'Cutlery'} width={80} height={80} className={classes.img}/>
          <p className={classes.p}>REACTive Recipes</p>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);