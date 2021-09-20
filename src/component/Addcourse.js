import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Addcourse extends Component {
    state={
        	
courseTitle:""	,
courseDescription:"",	
courseDate:""	,
courseDuration:"",	
courseVenue:""
    }
    onHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
        onRead=()=>{
            console.log(this.state)
            axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
                (response)=>{
console.log(response.data)
if(response.data.status=="success")
{
    alert("added successfully")
}
else{
    alert("something went wrong")
}
                }
            )
        }
    
    render() {
        return (
            <div>
                <Grid container style={{padding:50}}>
                   <Grid  style={{padding:5}}item xs={12} sm={6} md={6} lg={6} xl={6}>
                       <TextField
                       type="text"
                       variant="outlined"
                       label="enter name"
                       margin="normal"
                       name="courseTitle"
                       fullWidth
                       onChange={this.onHandler}
                       />

                   </Grid>
                   <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                   <TextField
                       variant="outlined"
                       label="enter courseDescription"
                       margin="normal"
                       name="courseDescription"
                       type="text"
                       fullWidth
                       onChange={this.onHandler}
                       />

                   </Grid>
                   <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                   <TextField
                       variant="outlined"
                       label="enter courseDate"
                       margin="normal"
                       name="courseDate"
                       type="date"
                       fullWidth
                       onChange={this.onHandler}
                       />
                   </Grid>
                   <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                   <TextField
                       variant="outlined"
                       label="enter courseDuration"
                       margin="normal"
                       name="courseDuration"
                       type="text"
                       fullWidth
                       onChange={this.onHandler}
                       />
                   </Grid>
                   <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                   <TextField
                       variant="outlined"
                       label="enter courseVenue"
                       margin="normal"
                       name="courseVenue"
                       type="text"
                       fullWidth
                       onChange={this.onHandler}
                       />
                   </Grid>
                   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                   <Button
                   variant="contained"
                   fullWidth
                   margin="normal"
                   color="secondary"
                   type="submit"
                   onClick={this.onRead}

                   >SUBMIT</Button>
                   </Grid>
                </Grid>
            </div>
        )
    }
}
