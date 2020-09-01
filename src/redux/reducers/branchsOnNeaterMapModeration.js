const initialState = []

const branchsOnNeaterMapModerationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BRANCHS_ON_NEATHER_MAP_MODERATION':
            return [...action.payload]
        default:
            return state
    }
}

export default branchsOnNeaterMapModerationReducer