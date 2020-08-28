const initialState = [
    { name: 'Райск', description: 'Столица Империи', branch: 'red', type: 'portal', tunnel: true, x: 21, y: 194 },
    { name: 'Главный эндер портал', description: 'Общий портал в энд', branch: 'two', type: 'portal', tunnel: true, x: 121, y: 146 },
    { name: 'Две ветки', description: 'Маркер для теста', branch: 'two', type: 'portal', tunnel: true, x: 100, y: -100 },
    { name: 'Крепость', description: 'Тут можно пофармить головы визер-скелетов', branch: 'false', type: 'portal', tunnel: false, x: -200, y: -200 },
    { name: 'Хаб', description: 'тут', branch: 'all', type: 'hab', x: 0, y: 0 },
];

const branchsFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'BRANCHS':
            console.log('reducer', action)
           return [
               ...state, action.payload
           ]
        default:
            return state
    }
}

export default branchsFilter