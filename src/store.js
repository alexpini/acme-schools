const API = '/api';

import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

//constants / action types
const SET_SCHOOL = 'SET_SCHOOL';
const SET_STUDENTS = 'SET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DESTROY_STUDENT = 'DESTROY_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

//action creators
const setSchool = (schools)=> ({ type: SET_SCHOOL, schools });
const setStudents = (students)=> ({ type: SET_STUDENTS, students });
const _createStudent = (student) => ({ type: CREATE_STUDENT, student});
const _destroyStudent = (student)=> ({ type: DESTROY_STUDENT, student});
const _updateStudent = (student)=> ({ type: UPDATE_STUDENT, student});

//Thunks

const getSchools = ()=> {
  return async(dispatch, getState)=> {
    const schools = (await axios.get(`${API}/schools`)).data;
    dispatch(setSchool(schools))
  }
};

const getStudents = ()=> {
  return async(dispatch, getState)=> {
    const students = (await axios.get(`${API}/students`)).data;
    dispatch(setStudents(students))
  }
};

const createStudent = (student)=> {
  return async(dispatch, getState)=> {
    const created = (await axios.post(`${API}/students`, student)).data;
    dispatch(_createStudent(created));
  }
};

const destroyStudent = (student)=> {
  return async(dispatch, getState)=> {
    const destroyed = (await axios.delete(`${API}/students/${student.id}`, student)).data;
    dispatch(_destroyStudent(student));
  }
};

const updateStudent = (student)=> {
  return async(dispatch, getState)=> {
    const updated = (await axios.put(`${API}/students`, student)).data;
    dispatch(_updateStudent(updated));
  }
};

export { getSchools, getStudents, createStudent, destroyStudent, updateStudent }


//Reducers

const store = createStore(
  combineReducers({
    schools: (state = [], action)=> {
      if(action.type === SET_SCHOOL) {
        return action.schools;
      }
      return state;
    },
    students: (state = [], action)=> {
      if(action.type === SET_STUDENTS) {
        return action.students
      }
      if(action.type === CREATE_STUDENT) {
        return [...state, action.student];
      }
      if(action.type === DESTROY_STUDENT) {
        return [...state].filter( student => student.id !== action.student.id)
      }
      if(action.type === UPDATE_STUDENT) {
        return [...state].map( student => student.id === action.student.id ? action.student : student)
    }
    return state;
  }}), applyMiddleware(thunkMiddleware)
);

export default store
