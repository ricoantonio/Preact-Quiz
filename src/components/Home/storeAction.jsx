import createStore from 'unistore'

const store = createStore({count:0, progress:0, main:"js"})

const actions = (theStore) =>({
    correct:({ count }) => ({count:count+1}),
    reset:({ count }) => ({count:0}),
    progressUp:({progress}) => ({progress:progress+1}),
    toJs:({main}) => ({main:"js"}),
    toPhy:({main}) => ({main:"phy"}),
})

export {store, actions}