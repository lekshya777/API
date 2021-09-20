import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component {
    state={
        customer:[]
    }
    getData=()=>{
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                console.log(response.data)
                this.setState(
                    {
                        customer:response.data
                    }
                )
            }
        )
    }
    render() {
        return (
           <Grid container style={{padding:70}}>
               <Grid item xs={12} sm={12} md={12} lg={12}>
<Button
fullWidth
variant="contained"
color="primary"
onClick={this.getData}
>GET THE INFORMATION</Button>
               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={12}>
<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                    customer title
                </TableCell>
                <TableCell>
                    customer description
                    </TableCell>
                    <TableCell>
                    course venue
                    </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {this.state.customer.map((value,index)=>
            {return <TableRow>
<TableCell>
{value.courseTitle}
</TableCell>
<TableCell>
{value.courseDescription}
</TableCell>
<TableCell>
{value.courseVenue}
</TableCell>

</TableRow>
             })
            }
            
        </TableBody>
    </Table>
</TableContainer>
               </Grid>
           </Grid>
        )
    }
}
