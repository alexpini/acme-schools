import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const _Nav = ({ schools, students })=> {
  // const mostPopular = schools.filter( student => )
  // const top = schools.filter( student => )
  // console.log(schools);
  return (
    <div>
      <nav>
        <Link to='/schools'>Schools</Link>
        <Link to='/students'>Students</Link>
        <Link to='/schools/:id'>Most Popular </Link>
        <Link to='/schools/:id'>Top School </Link>
      </nav>
    </div>
  )
}

const mapStateToProps = ({ schools, students })=> ({ schools, students });

const Nav = connect(mapStateToProps)(_Nav);

export default Nav
