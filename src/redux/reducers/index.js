import { combineReducers } from 'redux'

import branchsFilter from './branchs'

const rootReducer = combineReducers({
    branchs: branchsFilter,
})

export default rootReducer