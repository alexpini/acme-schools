import React from 'react';
import { connect } from 'react-redux';
import { getSchools, getStudents, destroyStudent } from './store';

const { Component } = React;

class _Students extends Component {
  constructor() {
    super();
    this.destroyStudent = this.destroyStudent.bind(this)
  }
  async componentDidMount() {
    await this.props.getStudents()
  }
  async destroyStudent(student) {
    await this.props.destroy(student)
  }

  render() {
    const { destroyStudent } = this
    const { students, schools } = this.props
    return (
      <div>
          {
            students.map( student => {
              return (
                <div id='flex'>
                  <div>Name: {student.firstName} {student.lastName}
                  {console.log(student.firstName)}
                  </div>
                  <div>GPA: {student.gpa}</div>
                  <select>
                        {schools.map( school => <option value='Not Enrolled'>{school.name}</option>)}
                  </select>
                  <button type = 'submit' onClick = {() => destroyStudent(student)}>Destroy Student</button>
                </div>
              )
            })
          }
      </div>
    );
  };
};

const mapStateToProps = ({ schools, students })=> ({ schools, students });

const mapDispatchToProps = (dispatch) => {
  return {
     destroy: (student) => dispatch(destroyStudent(student)),
     getStudents: () => dispatch(getStudents()),
     getSchools: () => dispatch(getSchools())
   }
}

const Students = connect(mapStateToProps, mapDispatchToProps)(_Students);

export default Students
