import { connect } from "react-redux";
import AddListing from '../components/AddListing';
import { addPlace } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return{
    addPlace: (place) => dispatch(addPlace(place))
  }
}

export default connect(null, mapDispatchToProps)(AddListing);