import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/index';
import Link from './Link';

//map redux state to props state
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
        filter: ownProps.filter
    }
};

//app redux dispatch to props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;