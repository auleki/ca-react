import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'
// add compose with dev tools 

const store = createStore(rootReducer) 

export default store 