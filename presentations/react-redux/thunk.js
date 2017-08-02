
// regular redux action is an object

//When creating async actions, we usually want a function that composes several regular actions
//together into some kind of flow.


// Old solution, functions that receive dispatch as arguments:

function getCases(dispatch, caseIds) {
  dispatch(getCasesStart())
  API.getCases(
    caseIds,
    (cases) => dispatch(getCasesSuccess(cases)),
    (error) => dispatch(getCasesError(error))
  )
}

// Sometimes seen as a function that receives dispatch and creates all these functions:
const createCaseActions(dispatch) => {
  return {
    getCases: (caseIds) => {
      dispatch(getCasesStart())
      API.getCases(
        caseIds,
        (cases) => dispatch(getCasesSuccess(cases)),
        (error) => dispatch(getCasesError(error))
      )
    }
  }
}

to use this function we need to pass it dispatch like so:

getCases(dispatch, caseIds)

// We now use a library called redux thunk that allows a new kind of action
// we can now represent an action as a function instead of an object, and dispatch that function.

const getCases = (caseIds) => (dispatch) => {
  dispatch(getCasesStart())
  API.getCases(
    caseIds,
    (cases) => dispatch(getCasesSuccess(cases)),
    (error) => dispatch(getCasesError(error))
  )
}

// We can now dispatch the result of getCases regularly

dispatch(getCases(caseIds)) // notice we don't need to pass dispatch in, we simply dispatch the action like any other

// The component dosen't need to know that it want to perform something
// no need to pass dispatch around, all "thunk" actions simply receive dispatch
// using thunk also gives us access to the current state, which we could use to abort the action if data
// already exists

const getCases = (caseIds) => (dispatch, getState) => {
  const cases = getState().cases
  if (cases.data || cases.isLoading) return
  dispatch(getCasesStart())
  API.getCases(
    caseIds,
    (cases) => dispatch(getCasesSuccess(cases)),
    (error) => dispatch(getCasesError(error))
  )
}
