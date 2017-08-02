// State is a plain object

{
  // Data state - like a frontend database
  cases: [{ subject: 'subject1', owner: 'david'}, { subject: 'subject1', owner: 'david'}]

  // UI state, represents the state of the application interface
  sortBy:
}

// the only way to update the state is to dispatch an action
dispatch(action)

// an Action is a plain object:
{ type: 'SORT_BY', field: 'subject' }
{ type: 'CASES_RECEIVED', cases: [...] }

// If something in the state changed, we know exactly why it changed, because of an action.

// The thing that puts actions and state together is the reducer, a javascript function that receives 2 arguments
// (state, action) => state

example:
function reducer(state = {}, action) {
  switch (action.type) {
    CASE 'SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy,
      }
    CASE 'CASES_RECEIVED':
      return {
        ...state,
        cases: [...state.cases, ..action.cases],
      }
  }
}

// Tools that we use to help maintainability

// action creators
import { createAction } from 'redux-actions'
const SORT_BY = 'SORT_BY'
const sortBy = createAction(SORT_BY) // returns an action creator

const action = sortBy('action_payload') // { type: 'SORT_BY', payload: 'action_payload' }
dispatch(action)

// reducers

const defaultState = {
  sortBy: null,
  cases: [],
}

import { handleActions } from 'redux-actions'
const reducer = handleActions({
  [SORT_BY]: (state, action) => ({ ...state, sortBy: action.payload })
  [CASES_RECEIVED]: (state, action) => ({ ...state, cases: [...state.cases, ..action.payload] })
}, defaultState)

// combining reducers, reducers correspond to slices of state that they manage,
export default combineReducers({
  reducer,
  anotherReducer,
})

state = {
  // state slice
  reducer: {

  }
  // state slice
  anotherReducer: {

  }
}
