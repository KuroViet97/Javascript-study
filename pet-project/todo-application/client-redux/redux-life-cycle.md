## React Life-cycle

# 1. store.dispatch(action)
- *action* is plain object
- Can be called anywhere in the application

# 2. Redux store calls reducer function
- 2 arguments: *current state tree* AND *action*
- reducers are *pure functions* that **only** compute next state and are predictable

# 3. Root reducer can combine output of multiple reducers into a single state tree (*combineReducers()*)
- optional

# 4. Redux store saves the complete state tree returned by the root reducer
- return the next state
- listeners are registered by *store.subscribe(listener)*
- listeners can call *store.getState()* for current state
