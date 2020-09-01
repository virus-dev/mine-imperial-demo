import { createStore } from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer,
     localStorage.getItem('redux-store') === null ? {} : JSON.parse(localStorage.getItem('redux-store')), 
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    localStorage.setItem('redux-store', JSON.stringify(store.getState()))
})

export default store