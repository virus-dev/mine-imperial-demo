const BRANCHS = 'BRANCHS'

export const addBranch = action => {
    console.log('action', action)
    return {
        type: BRANCHS,
        payload: action
    }   
}