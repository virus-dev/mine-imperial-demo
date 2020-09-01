const BRANCHS_ON_MODEDERATION = 'BRANCHS_ON_MODEDERATION'
const DELITE_ONE_BRANCH_ON_MODERATION = 'DELITE_ONE_BRANCH_ON_MODERATION'

export const addBranchOnModeration = action => ({
    type: BRANCHS_ON_MODEDERATION,
    payload: action
})

export const deliteOneBranchOnModeration = action => ({
    type: DELITE_ONE_BRANCH_ON_MODERATION,
    payload: action
})