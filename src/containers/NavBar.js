import { connect } from "react-redux";
import { logout } from "../redux/actions";
import NavBar from '../components/NavBar';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)