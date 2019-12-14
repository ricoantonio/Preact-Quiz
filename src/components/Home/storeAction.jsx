import createStore from 'unistore'

const store = createStore({count:0, progress:0})

const actions = (theStore) =>({
    correct:({ count }) => ({count:count+1}),
    reset:({ count }) => ({count:0}),
    progressUp:({progress}) => ({progress:progress+1})
})

export {store, actions}