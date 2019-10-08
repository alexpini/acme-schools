import React from 'react';
import { connect } from 'react-redux';
import { getSchools, getStudents } from './store';

class _Students extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getStudents();
    await this.props.getSchools();
  }
  render() {
    const {students} = this.props
    return (
      <div>
        <ul>
          {
            students.map( student => {
              return (
                <div>
                  <div>{student.firstName} {student.lastName}</div>
                  <div>GPA: {student.gpa}</div>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ schools, students })=> ({ schools, students });

const mapDispatchToProps = {
  getStudents: getStudents,
  getSchools: getSchools
}

const Students = connect(mapStateToProps, mapDispatchToProps)(_Students);

export default Students
