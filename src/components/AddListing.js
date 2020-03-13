import React, { Component } from 'react';
import { Redirect } from "react-router";
import Map from './Map';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddListing extends Component {
  render() {
    return (
      <div id='add-container'>
        <form id='add-form-container' noValidate autoComplete="off">
          <TextField id="standard-basic" label="Name" />
          <TextField id="standard-basic" label="Address" />
          <TextField id="standard-basic" label="Hours (ex. 8AM-9PM)" />
          <TextField id="standard-basic" label="Description" />
          <Button id="add-button" variant="contained" color="primary">
            Save
          </Button>
        </form>
        <div id='add-map-container'>
            <Map />
        </div>
      </div>
    );
  }
}

export default AddListing;