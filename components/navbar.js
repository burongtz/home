import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => (
    <React.Fragment>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="subtitle1" color="inherit">
                    Github Burongtz
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
)

export default NavBar;