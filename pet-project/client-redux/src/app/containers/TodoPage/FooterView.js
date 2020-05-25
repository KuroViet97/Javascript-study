import React from 'react'
import FilterLink from '../../components/Footer/FilterLink'
import { VisibilityFilters } from '../../actions'

const FooterView = () => (
  <div className="left">
    <span>Select filters: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default FooterView;