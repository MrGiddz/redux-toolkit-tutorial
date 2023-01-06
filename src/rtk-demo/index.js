import store from './app/store'
import { cakeActions } from './features/cake/cakeSlice'
import { iceCreamActions } from'./features/icecream/iceCreameSlice'
import {fetchUsers} from './features/user/userSlice'

console.log('Initial store ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated state ', store.getState())
})


// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(cakeActions.restocked(1))


// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))
// store.dispatch(iceCreamActions.restocked(1))


// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))
// store.dispatch(iceCreamActions.restocked(1))


store.dispatch(fetchUsers())

// unsubscribe() 