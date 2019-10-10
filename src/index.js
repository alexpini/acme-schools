import React from 'react'
import {render} from 'react-dom'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store, { createStudent, getStudents, getSchools } from './store'
import Nav from './Nav'
import Schools from './Schools'
import Students from './Students'


const { Component } = React;

class _App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getStudents();
    this.props.getSchools();
  }
  render() {
    return (
      <div>
        <div><Nav /><UserForm /><_Nav /></div>
        <h1>Home</h1>
      </div>

    )}
}

class _Nav extends Component{
  // componentDidMount(){

  // }
  render(){
    return (
      <Switch>
        {/* <Route component={ Nav } /> */}
        <Route path='/students' component={ Students } />
        {/* <Route path='/student/create' component={ Create } />  */}
        <Route path='/schools' component={ Schools } />
      </Switch>
    );
  }
 }



 class _UserForm extends Component{
   constructor() {
     super();
     this.state = {
       firstName: '',
       lastName: '',
       email: '',
       gpa: ''
     };
     this.createStudent = this.createStudent.bind(this)
     this.onChange = this.onChange.bind(this)
   }
   async createStudent(ev) {
     ev.preventDefault()
     await this.props.create(this.state)
   }
   onChange(ev) {
     this.setState({
       [ev.target.name]: ev.target.value
     });
   };

   render(){
     const {onChange, createStudent} = this
     return (
       <form id = 'createStudentForm'>
         <label>
           First Name: <input type = 'text' name = 'firstName' required onChange = {onChange}></input>
         </label>
         <label>
           Last Name: <input type = 'text' name = 'lastName' required onChange = {onChange}></input>
         </label>
         <label>
           Email: <input type = 'text' name = 'email' required onChange = {onChange}></input>
         </label>
         <label>
           GPA: <input type = 'decimal' name = 'gpa' required onChange = {onChange}></input>
         </label>
         <button type = 'submit' onClick={createStudent}>SAVE</button>
       </form>
     )
   }
 }









 const mapDispatchToProps = (dispatch) => {
   return {
      create: () => dispatch(createStudent()),
      getStudents: () => dispatch(getStudents()),
      getSchools: () => dispatch(getSchools())
    }
 }

 const UserForm = connect(null, mapDispatchToProps)(_UserForm)

 const App = connect(null, mapDispatchToProps)(_App)

render(<Provider store={store}><HashRouter><App /> </HashRouter></Provider>, document.getElementById('root'))

