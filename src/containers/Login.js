import { connect } from "react-redux";
import Login from '../components/Login';
import { login } from "../redux/actions";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);