const initialState = [
    // { name: 'Красная', description: 'Тест', branch: 'red', type: 'portal', tunnel: true, x: 50, y: 100 },
    // { name: 'Красная', description: 'Тест', branch: 'red', type: 'portal', tunnel: true, x: -50, y: 100 },
    // { name: 'Желтая', description: 'Тест', branch: 'yellow', type: 'portal', tunnel: true, x: 100, y: 50 },
    // { name: 'Желтая', description: 'Тест', branch: 'yellow', type: 'portal', tunnel: true, x: 100, y: -50 },
    // { name: 'Синяя', description: 'Тест', branch: 'blue', type: 'portal', tunnel: true, x: 50, y: -100 },
    // { name: 'Синяя', description: 'Тест', branch: 'blue', type: 'portal', tunnel: true, x: -50, y: -100 },
    // { name: 'Зеленая', description: 'Тест', branch: 'green', type: 'portal', tunnel: true, x: -100, y: 50 },
    // { name: 'Зеленая', description: 'Тест', branch: 'green', type: 'portal', tunnel: true, x: -100, y: -50 },
    // { name: 'Синяя Желтая', description: 'Тест', branch: 'two', type: 'portal', tunnel: true, x: 300, y: -300 },
    // { name: 'Синяя Зеленая', description: 'Тест', branch: 'two', type: 'portal', tunnel: true, x: -300, y: -300 },
    // { name: 'Красная Желтая', description: 'Тест', branch: 'two', type: 'portal', tunnel: true, x: 300, y: 300 },
    // { name: 'Красная Зеленая', description: 'Тест', branch: 'two', type: 'portal', tunnel: true, x: -300, y: 300 },
    { name: 'Райск', description: 'Столица Империи', branch: 'red', type: 'portal', tunnel: true, x: 21, y: 194 },
    { name: 'Фермы', description: 'Тут ферма пороха, опыта и кактусов', branch: 'red', type: 'portal', tunnel: true, x: -12, y: 314 },
    { name: 'Крепость', description: 'Крепость нижнего мира', branch: false, type: 'portal', tunnel: true, x: 100, y: 350 },
    { name: 'Месса', description: 'Тут много терракоты', branch: 'red', type: 'portal', tunnel: true, x: 15, y: 525 },
    { name: 'Главный портал в эндер мир', description: 'Если возродил дракона, то сам его и убивай', branch: 'red', type: 'portal', tunnel: true, x: 121, y: 146 },
    { name: 'Пляж', description: 'Заброшенное место', branch: 'yellow', type: 'portal', tunnel: true, x: 175, y: 62 },
    { name: 'Ферма гвардианов', description: 'Тут можно пофармить морские фонарики', branch: 'green', type: 'portal', tunnel: true, x: -194, y: 42 },
    { name: 'Красный биом', description: 'Много боровов', branch: 'green', type: 'portal', tunnel: true, x: -1000, y: -200 },
    { name: 'Тёмный лес', description: 'Тёмный лес, ровное болото', branch: 'blue', type: 'portal', tunnel: true, x: -8, y: -126 },
    { name: 'Грибной остров', description: 'Можно брать грибных коров', branch: 'blue', type: 'portal', tunnel: true, x: -473, y: -1062 },
    { name: 'Хаб', description: 'тут', branch: 'all', type: 'hab', x: 0, y: 0 },
];

const branchsFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'BRANCHS':
           return [
               ...state, action.payload
           ]
        default:
            return state
    }
}

export default branchsFilter