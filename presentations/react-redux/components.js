



// functional component
const Welcome = (props) => (
  <h1>Hello, {props.name}</h1>
)


// Class Component, can use lifecycle methods and local state
// JSX compiles down to javascript, use any javascript
// within curly braces
class CasesList extends React.Component {

  state = {
    expanded: false,
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <div className='cases'>
        <h1 onClick={this.toggleExpand}>{this.props.caseType} list</h1>
        {this.state.expanded && <ul>
          {this.props.cases.map(case => <li>{case.subject} {case.owner}</li>)}
        </ul>}
      </div>
    );
  }
}

// Components are rendered like html tags, attributes are passed to `props`
<div>
  <CasesList cases={casesData} />
</div>

// Special prop this.props.children
<div>
  <CasesList cases={casesData} >
    <div>child1</div>
    <div>child2</div>
    <div>child3</div>
  </CasesList>
</div>
