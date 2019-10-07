const API = '/api';

import thunks from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware } from 'redux';

import axios from 'axios';

//constants
const SET_SCHOOL = 'SET_SCHOOL';
const SET_STUDENTS = 'SET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DESTROY_STUDENT = 'DESTROY_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const GET_ONE_STUDENT = 'GET_ONE_STUDENT';

//action creators
const setSchool = (school)=> ({ type: SET_SCHOOL, school });
const setStudents = (students)=> ({ type: SET_STUDENTS, students });
const _createStudent = (student) => ({ type: CREATE_STUDENT, student});
const _destroyStudent = (student)=> ({ type: DESTROY_STUDENT, student});
const _updateStudent = (student)=> ({ type: UPDATE_STUDENT, student});
const _getOneStudent = (student)=> ({ type: GET_ONE_STUDENT, student });
