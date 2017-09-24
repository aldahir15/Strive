import { connect } from 'react-redux';
import PathForm from './path_form';
import { fetchPaths, fetchPath, createPath, deletePath } from '../../actions/path_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    path: state.path
  };
};

const mapDispatchToProps = (dispatch) => ({
  createPath: (path) => dispatch(createPath(path))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PathForm));
