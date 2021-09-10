import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles/Styles';
import ElevationScroll from '../ElevationScroll/ElevationScroll';

const Header = () => {
    const classes = useStyles();
    return(
        <ElevationScroll>
            <AppBar color='inherit' position='fixed' className={classes.root}>
                <Toolbar>
                    <Typography align='center' className={classes.title} variant='h5'>My app</Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Header;