const configureStore = require("@reduxjs/toolkit");
const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers



const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restoreCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// const initialState = {
//    numOfCakes: 10,
//  numOfIcream: 20
//}

const initialCakeState = {
    numOfCakes: 20
}

const initialIceCreamState = {
    numOfIcream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {

        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTOCKED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
    
        default: return state;
    } 
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcream: state.numOfIcream - action.payload
            }
        case ICECREAM_RESTOCKED: 
            return {
                ...state,
                numOfIcream: state.numOfIcream + action.payload
            }
        case CAKE_ORDERED: 
            return {
                ...state,
                numOfIcream: state.numOfIcream--
            }
    
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Update state ", store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoreCake(20))

const actions = bindActionCreators({
    orderCake, restoreCake, orderIceCream, restockIceCream
}, store.dispatch)

actions.orderCake()
actions.restoreCake(3)

actions.orderIceCream()
actions.restockIceCream()


unsubscribe()