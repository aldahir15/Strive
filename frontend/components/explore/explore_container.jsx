import { connect } from 'react-redux';
import Explore from './explore';
import { fetchPaths, fetchPath, createPath, deletePath } from '../../actions/path_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    path: state.path
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPaths: () => dispatch(fetchPaths()),
  createPath: (path) => dispatch(createPath(path)),
  fetchPath: (workoutId, id) => dispatch(fetchPath(workoutId, id)),
  deletePath: (workoutId, id) => dispatch(deletePath(workoutId, id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Explore);
