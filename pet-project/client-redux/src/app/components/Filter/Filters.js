import React from 'react'
import FilterLink from '../../components/Filter/FilterLink'
import { VisibilityFilters } from '../../actions'

const Filters = () => (
      <span className="float-left">
            <span>Select filters: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </span>
)

export default Filters;