import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Heading extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography>
                        software company</Typography>
                        <Link to="/"><Typography >add course</Typography></Link>
                        <Link to="/viewcourse"><Typography >view course</Typography></Link>
                    
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
