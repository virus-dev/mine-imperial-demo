const initialState = [
    { name: 'Синяя ветка', branch: 'blue', type: 'mainTunnel', xStart: 0, zStart: 0, x: 0, y: -1000 },
    { name: 'Желтая ветка', branch: 'yellow', type: 'mainTunnel', xStart: 0, zStart: 0, x: 1000, y: 0 },
    { name: 'Красная ветка', branch: 'red', type: 'mainTunnel', xStart: 0, zStart: 0, x: 0, y: 1000 },
    { name: 'Зеленая ветка', branch: 'green', type: 'mainTunnel', xStart: 0, zStart: 0, x: -1000, y: 0 },
    { name: 'Райск', branch: 'red', type: 'portal', tunnel: 'true', xStart: 0, zStart: 194, x: 21, y: 194 },
    { name: 'Главный эндер портал', branch: 'yellow', type: 'onRed', tunnel: 'true', xStart: 121, zStart: 0, x: 121, y: 146 },
    { name: 'Главный эндер портал', branch: 'red', type: 'end', tunnel: 'true', xStart: 0, zStart: 146, x: 121, y: 146 },
    { name: 'Крепость', branch: 'false', type: 'portal', tunnel: 'false', xStart: -200, zStart: -200, x: -200, y: -200 },
    { name: 'Хаб', branch: 'all', type: 'hab', xStart: 0, zStart: 0, x: 0, y: 0 },
];

const branchsFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BRANCH':
           return {
               ...state,
           }
        default:
            return state
    }
}

export default branchsFilter