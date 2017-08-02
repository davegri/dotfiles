// best practices

//Best practices for functions apply - small, clear, small number of arguments. (props)

//Always use functional components if you don’t need local state, lifecycle methods or class methods in general.

//If your render method is getting too long, first instinct should be to extract out components. Before breaking apart the render method into helper methods.

//Helper methods that return JSX should be prefixed with render

//Use arrow functions in order to maintain `this`

//When rendering arrays use a unique representative key

class CasesList extends React.Component {
  render() {
    return (
      <div className="cases">
        <h1>{this.props.caseType} list</h1>
        <ul>
          {this.props.cases.map(case => (
            <li>
              <div>
                <Link onClick={() => this.props.openCase(case.id)}>
                  <span className='subject'>{case.subject}</span>
                </Link>
                <span className='owner'>{case.owner}</span>
                <span className='number'>{case.number}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
