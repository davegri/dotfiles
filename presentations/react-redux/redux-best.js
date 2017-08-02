// best practices

//divide standard async flow into 3 actions

GET_CASES_START
GET_CASES_SUCCESS
GET_CASES_FAILUE

// When updating state, use immutable methods (map, filter, reduce)
// instead of methods that perform mutations to avoid mutating state.

// updating one item in an array
export default handleActions({
  [ACTIONS.CASE_UPDATED]: (state, action) => {
    const updatedCase = action.payload.case
    return {
      ...state,
      cases: state.cases.map(existingCase => {
        if (existingCase.id === updatedCase) return updatedCase
        // not the case we care about
        return existingCase
      })
    }
  }
})

// removing an item from an array
export default handleActions({
  [ACTIONS.CASE_DELETED]: (state, action) => {
    const caseId = action.payload.caseId
    return {
      ...state,
      cases: state.cases.filter(case => case.id !== caseId)
    }
  }
})

// Do not store derived data in state, state should be the minimal representation of your data
// so that you have 1 source of truth
state = {
  cases: {
    allCases: []
    completedCases: []
  }
}

// If you can derive completed cases from all cases by simply performing a filter,
// don't store both of them in the state. (rerunning filter has performance implications that we will discuss later)

// Do not store non-serializable data in store, functions, components, etc..
// this messes with caching, debugging, and more..
state = {
  // bad
  func: () => {

  }
  // bad
  component: <Component />
}

// selectors
// selectors are functions that receive state (or state slice) and return a part of the state
// (name is inspire by css selectors)

example:
const getCases = state => state.data
const getCaseById = (state, id) => state.data.find(case => case.id === id)

// selectors should be defined at the bottom of the reducer because the reducer
// decides what the state shape looks like
