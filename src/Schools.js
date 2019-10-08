import React from 'react';
import { connect } from 'react-redux';
import { getSchools } from './store';

class _Schools extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getSchools()
  }
  render() {
    const {schools} = this.props
    console.log(schools)
    return (
      <div>
        <ul>
          {
            schools.map( school => {
              return (
                <div>
                  <div>{school.name}</div>
                  <div>{school.name}</div>
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
  getSchools: getSchools
}

const Schools = connect(mapStateToProps, mapDispatchToProps)(_Schools);

export default Schools
