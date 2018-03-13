import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import { getWeb3 } from '../actions';

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    // store.dispatch(getWeb3());
    return store;
};