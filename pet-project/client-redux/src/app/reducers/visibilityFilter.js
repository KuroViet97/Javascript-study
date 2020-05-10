import { VisibilityFilters } from '../actions/index';

//in case no state given in the beginning (undefined), show all is set as default
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;