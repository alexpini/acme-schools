import React from 'react'
import {render} from 'react-dom'
import thunks from 'redux-thunk'
import { HashRouter, Link, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
const { Component } = React
//todo
//make Nav component

class App extends React.Component {
  constructor() {
    super();
    this.state
  }
  render() {
    //load the _Nav component(below) here and Nav component(which hasnt been made yet, but will contain the navlinks
    return
      <div>
        <Nav />
        <_Nav />
      </div> 
  }
}


class _Nav extends Component{
  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
    return (
      //take out this hashrouter
      <HashRouter>
        <Route component={ Nav } />
        //add <Switch>
        <Route path='/students' component={ Student } />
        <Route path='/student/create' component={ Create } />
        <Route path='/schools' component={ School } />
        // add</Switch>
      //take outthis too
      </HashRouter>
    );
  }
 }

//your getElementById is from index.html whatever the div is with the id, maybe root?
ReactDOM.render(<Provider store={store}><HashRouter><App /> </HashRouter></Provider>, document.getElementById(''))

