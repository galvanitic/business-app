import api_key from '../api-keys';

export const login = () => {
  return {
    type: 'LOG_IN',
    value: true
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT',
    value: false
  }
}

export const fetchPlaces = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude.toString()
      const long = pos.coords.longitude.toString()
      const location = `${lat},${long}`
      let endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=distance&key=${api_key}&fields=opening_hours,utc_offset&types=establishment`;
      fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const action = {
          type: 'FETCH_PLACES',
          value: data.results
        }
        dispatch(action);
      });
    });
  }
}

export const addPlace = (place) => {
  return {
    type: 'ADD_PLACE',
    value: place
  }
}

export const rmPlace = (index) => {
  return {
    type: 'RM_PLACE',
    value: index
  }
}