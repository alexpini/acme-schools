import React from 'react';
import { connect } from 'react-redux';
import { getSchools } from './store';
import { getStudents } from './store';
import { studentCount } from '../utility';

const { Component } = React;

class _Schools extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getSchools()
  }
  render() {
    const {schools, students} = this.props
    return (
      <div>
        <ul>
          {
            schools.map( school => {
              return (
                <div>
                  <div id='flex'>
                    <li>{school.name}</li>
                    <li>Student Count { studentCount(schools, students) }</li>
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  };
};





const mapStateToProps = ({ schools, students })=> ({ schools, students });

const mapDispatchToProps = {
  getSchools: getSchools,
  getStudents: getStudents
}

const Schools = connect(mapStateToProps, mapDispatchToProps)(_Schools);

export default Schools
