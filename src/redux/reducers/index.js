import { combineReducers } from 'redux'

import branchsFilter from './branchs'
import addBranchFilter from './addBranchForm'

const rootReducer = combineReducers({
    branchs: branchsFilter,
    addBranchForm: addBranchFilter,
})

export default rootReducer