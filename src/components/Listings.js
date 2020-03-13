import React, { Component } from 'react';
import { Redirect } from "react-router";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import api_key from '../google-api-key';

const routeToAdd = () => {
  console.log('Redirected to /add')
  window.location.replace('/add')
}

class Listings extends React.Component{
  componentDidMount(){
    // let lat, long;
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude.toString()
      const long = pos.coords.longitude.toString()
      const location = `${lat},${long}`
      let endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=distance&type=food&key=${api_key}`;
      fetch(endpoint)
      .then(response => response.json())
      .then(res => console.log(res));
    });
  }
  render(){
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Address</TableCell>
              {true ? <TableCell align="right">Delete</TableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{true 
                ? 
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                : null}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {true
      ?
      <Fab className='floater-add' color="primary" aria-label="add">
        <AddIcon onClick={routeToAdd} />
      </Fab>
      :null}
      
    </div>
  );}
}

export default Listings;