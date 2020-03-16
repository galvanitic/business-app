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
import CircularProgress from '@material-ui/core/CircularProgress';


const routeToAdd = () => {
  console.log('Redirected to /add')
  window.location.replace('/add')
}

class Listings extends React.Component{
  state = {
    places: [],
    isLoading: true
  }
  componentDidMount(){
    this.props.fetchPlaces();
    this.setState({isLoading: false});
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
              {this.props.loggedIn ? <TableCell align="right">Delete</TableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.isLoading ? <CircularProgress color="secondary" /> : this.props.places.map((place, i) => {
              return(
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {place.name}
                </TableCell>
                <TableCell align="right">{place.types[1]}</TableCell>
                <TableCell align="right">{place.weekday_text}</TableCell>
                <TableCell align="right">{place.vicinity}</TableCell>
                <TableCell align="right">{this.props.loggedIn 
                  ? 
                  <IconButton aria-label="delete" place={i} onClick={() => this.props.rmPlace(i)}>
                    <DeleteIcon />
                  </IconButton>
                  : null}
                </TableCell>
              </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {this.props.loggedIn
      ?
      <Fab className='floater-add' color="primary" aria-label="add">
        <AddIcon onClick={routeToAdd} />
      </Fab>
      :null}
      
    </div>
  );}
}

export default Listings;