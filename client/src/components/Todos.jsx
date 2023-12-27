import React, { useState } from 'react';
import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Todos = ({todo}) => {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  
    const dispatch = useDispatch();

    const onFormSumbit = (e) =>{
      e.preventDefault();
      setEditing(prevstate=> !prevstate);
      dispatch(updateTodo(todo._id, text));
    }
   
  return (
    <>
      <li className='task'
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{textDecoration: todo.done ? 'line-through' : '',
      color: todo.done ? 'black' : '#31485e'}}>

        <span style={{display: editing ? 'none' : ''}}>{todo.data}</span>

        <form style={{display: editing ? 'inline' : 'none'}}
        onSubmit={onFormSumbit}>
          <input type="text" value={text} className='edit-todo' onChange={(e)=> setText(e.target.value)}
          />
        </form>

        <span className='icon' style={{color:'red'}} onClick={()=> dispatch(deleteTodo(todo._id))}>
          <i className="fa fa-trash"></i></span>

        <span className='icon' style={{color:'darkblue'}} 
        onClick={() => setEditing(prevstate => !prevstate)}>
          <i className='fa fa-pen'></i></span>
      </li>
    </>
  )
}

export default Todos;
