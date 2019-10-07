import React from 'react'
import {render} from 'react-dom'
import thunks from 'redux-thunk'
import { HashRouter, Link, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

const { Component } = React;

class App extends React.Component {
  constructor() {
    super();
    this.state
  }
  render() {
    return <div>Hello How Are You</div>
  }
}

class _Nav extends Component{
  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
    return (
      <HashRouter>
        <Route component={ Nav } />
        <Route path='/students' component={ Student } />
        <Route path='/student/create' component={ Create } />
        <Route path='/schools' component={ School } />
      </HashRouter>
    );
  }
 }


ReactDOM.render(<Provider store={store}><HashRouter><App /> </HashRouter></Provider>, document.getElementById(''))

