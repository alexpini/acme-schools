import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mostPopular, topSchool } from '../utility';

const _Nav = ({ schools, students })=> {
  // const mostPopular = schools.filter( student => )
  // const top = schools.filter( student => )
  // console.log(schools);
  return (
    <div>
      <nav>
      <Link className='home' to='/'>Acme Schools</Link>
        <Link to='/schools'>Schools { schools.length }</Link>
        <Link to='/students'>Students { students.length }</Link>
        <Link to='/schools/:id'>Most Popular </Link>
        <Link to='/schools/:id'>Top School </Link>
      </nav>
    </div>
  )
}

const mapStateToProps = ({ schools, students })=> ({ schools, students });

const Nav = connect(mapStateToProps)(_Nav);

export default Nav
