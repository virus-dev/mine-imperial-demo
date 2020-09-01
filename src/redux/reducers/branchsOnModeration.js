const initialState = [
    { name: 'Что здесь?', description: 'лалалалалалала', branch: 'two', type: 'portal', tunnel: true, x: 1500, y: 1500 },
    { name: 'Плохой маркер', description: 'АХХАХА', branch: 'two', type: 'portal', tunnel: true, x: 345, y: 1456 },
    { name: 'Магазин брони', description: 'Здесь вы можете купить броню', branch: 'yellow', type: 'portal', tunnel: true, x: 700, y: -500 },
    { name: 'Сцена для мероприятий', description: 'Вход свободный, скоро построим туннель!', branch: false, type: 'portal', tunnel: false, x: -300, y: 200 },
]

const branchsOnModerationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BRANCHS_ON_MODEDERATION':
            return [...state, action.payload]
        case 'DELITE_ONE_BRANCH_ON_MODERATION':
            return [...action.payload]
        default:
            return state
    }
}

export default branchsOnModerationReducer