import { combineReducers } from 'redux'

import branchsFilter from './branchs'
import addBranchFilter from './addBranchForm'
import userReducer from './user'
import branchsOnModerationReducer from './branchsOnModeration'
import branchsOnNeaterMapModerationReducer from './branchsOnNeaterMapModeration'

const rootReducer = combineReducers({
    branchs: branchsFilter,
    addBranchForm: addBranchFilter,
    user: userReducer,
    branchsOnModeration: branchsOnModerationReducer,
    branchsOnNeaterMapModeration: branchsOnNeaterMapModerationReducer,
})

export default rootReducer