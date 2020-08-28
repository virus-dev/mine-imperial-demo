const initialState = {
    title: '',
    description: '',
    x: '0',
    y: '0',
    hasTunnel: false,
    hasTwoTunnelDisabled: true,
    hasTwoTunnel: false,
    branchColor: []
}

const addBranchFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BRANCH_TITLE':
            return {
                ...state,
                title: action.payload,
            }
        case 'ADD_BRANCH_DESCRIPTION':
            return {
                ...state,
                description: action.payload,
            }
        case 'ADD_BRANCH_X':
            return {
                ...state,
                x: action.payload,
                hasTwoTunnel: false,
                branchColor: [],
            }
        case 'ADD_BRANCH_Y':
            return {
                ...state,
                y: action.payload,
                hasTwoTunnel: false,
                branchColor: [],
            }
        case 'ADD_BRANCH_HAS_TUNNEL':
            return {
                ...state,
                hasTunnel: action.payload,
                branchColor: [],
            }
        case 'ADD_BRANCH_HAS_TWO_TUNNEL_DISABLED':
            return {
                ...state,
                hasTwoTunnelDisabled: action.payload,
                branchColor: [],
            }
        case 'ADD_BRANCH_HAS_TWO_TUNNEL':
            return {
                ...state,
                hasTwoTunnel: action.payload,
            }
        case 'ADD_BRANCH_COLOR':
            return {
                ...state,
                branchColor: action.payload,
                hasTwoTunnel: false,
            }
        case 'ADD_BRANCH_EMPTY':
            return {
                ...state,
                title: '',
                description: '',
                x: '0',
                y: '0',
                hasTunnel: false,
                hasTwoTunnelDisabled: true,
                hasTwoTunnel: false,
                branchColor: []
            }
        default:
            return state;
    }
}

export default addBranchFilter