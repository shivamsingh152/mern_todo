import axios from 'axios';
import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, TOGGLE_TAB } from './type';

export const addNewTodo = (data) => async(dispatch) =>{
    try {
        const res =  await axios.post('https://mern-todo-back-p6mf.onrender.com/todos', {data});
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
      console.log(error)   
    }
};

export const getAllTodos = () => async (dispatch) =>{
  try {
    const res =  await axios.get('https://mern-todo-back-p6mf.onrender.com/todos');
    dispatch({ type: GETALL_TODO, payload: res.data });
} catch (error) {
  console.log(error)   
}
};

export const toggleTodo = (id) => async (dispatch) =>{
  try {
    const res =  await axios.get(`https://mern-todo-back-p6mf.onrender.com/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
} catch (error) {
  console.log(error)   
}
};

export const updateTodo = (id, data) => async (dispatch) =>{
  try {
    const res =  await axios.put(`https://mern-todo-back-p6mf.onrender.com/todos/${id}`, {data});
    dispatch({ type: UPDATE_TODO, payload: res.data });
} catch (error) {
  console.log(error)   
}
};

export const deleteTodo = (id) => async (dispatch) =>{
  try {
    const res =  await axios.delete(`https://mern-todo-back-p6mf.onrender.com/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
} catch (error) {
  console.log(error)   
}
};

export const toggleTab = (tab) => async (dispatch) =>{
  dispatch({type: TOGGLE_TAB, selected: tab})
}