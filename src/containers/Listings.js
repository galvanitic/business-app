import { connect } from "react-redux";
import Listings from '../components/Listings';
import { rmPlace, fetchPlaces } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    places: state.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaces: () => dispatch(fetchPlaces()),
    rmPlace: index => dispatch(rmPlace(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)