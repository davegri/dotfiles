// Presentational component
const CasesList = (props) => (
  <div className='cases'>
    <h1 onClick={props.onCaseClick}>{props.caseType} list</h1>
    <ul>
      {props.cases.map(case => <Case case={case} onDelete={props.onCaseDelete} />}
    </ul>
  </div>
)

class Case extends Component {
  handleDelete() {
    this.props.onDelete(this.props.case.id)
  }
  render() {
    <li>
      {case.subject} {case.owner}
      <button onClick={this.handleDelete}>delete</button>
    </li>
  }
}

import { connect } from 'react-redux'
import { caseDelete } from 'actions/cases'

// Container component
class CasesListContainer extends Component {
  componentDidMount() {
    this.props.fetchCases()
  }

  handleCaseDelete = (caseId) => {
    // compose actions and business logic in container.
    // redirects, any other actions that need to happen as a result of this action
    this.props.caseDelete(caseId)
    redirect()
  }

  render() {
    <CasesList cases={this.props.cases} onCaseDelete={this.handleCaseDelete}/>
  }
}

// only state access, no business logic, prefer selectors over accessing state
// do not create new obects, functions or arrays.
// do not use it for anything else except mapping state to props
const mapStateToProps = (state) => ({
    cases: getCases(state.cases)
})

// allows our container to dispatch actions without calling dispatch on them.
// not to be used for defining business logic, composing actions, etc. only for mappping
// action creators inside a function that dispatches them.
const mapDispatchToProps = (dispatch) => {
  caseDelete: (id) => dispatch(caseDelete(id)),
}

export connect(mapStateToProps, mapDispatchToProps)

// prefer mapDispatchToProps shorthand:
const mapDispatchToProps = {
  caseDelete, // (...args) => dispatch(caseDelete(...args))
}
