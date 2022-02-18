import { createStore } from 'redux';
function store1(state = [], value) {
    return state.concat([value.text])
}
let store = createStore(store1);
store.dispatch({
    type: 'ok',
    text: '100',
})
export { store };