const ADD_BRANCH_TITLE = 'ADD_BRANCH_TITLE';
const ADD_BRANCH_DESCRIPTION = 'ADD_BRANCH_DESCRIPTION';
const ADD_BRANCH_X = 'ADD_BRANCH_X';
const ADD_BRANCH_Y = 'ADD_BRANCH_Y';
const ADD_BRANCH_HAS_TUNNEL = 'ADD_BRANCH_HAS_TUNNEL';
const ADD_BRANCH_HAS_TWO_TUNNEL_DISABLED = 'ADD_BRANCH_HAS_TWO_TUNNEL_DISABLED';
const ADD_BRANCH_HAS_TWO_TUNNEL = 'ADD_BRANCH_HAS_TWO_TUNNEL';
const ADD_BRANCH_COLOR = 'ADD_BRANCH_COLOR';
const ADD_BRANCH_EMPTY = 'ADD_BRANCH_EMPTY';

export const addBranchTitle = action => {
    return {
        type: ADD_BRANCH_TITLE,
        payload: action,
    }
}

export const addBranchDescription = action => {
    return {
        type: ADD_BRANCH_DESCRIPTION,
        payload: action,
    }
}

export const addBranchX = action => {
    return {
        type: ADD_BRANCH_X,
        payload: action,
    }
}

export const addBranchY = action => {
    return {
        type: ADD_BRANCH_Y,
        payload: action,
    }
}

export const addBranchHasTunnel = action => {
    return {
        type: ADD_BRANCH_HAS_TUNNEL,
        payload: action,
    }
}

export const addBranchHasTwoTunnelDisabled = action => {
    return {
        type: ADD_BRANCH_HAS_TWO_TUNNEL_DISABLED,
        payload: action,
    }
}

export const addBranchHasTwoTunnel = action => {
    return {
        type: ADD_BRANCH_HAS_TWO_TUNNEL,
        payload: action,
    }
}

export const addBranchColor = action => {
    return {
        type: ADD_BRANCH_COLOR,
        payload: action,
    }
}

export const addBranchEmpty = () => {
    return {
        type: ADD_BRANCH_EMPTY,
    }
}