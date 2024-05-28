import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  completeTodos,
  removeTodos,
  updateTodos,
  fetchTodoItems,
  updateTodoItems
} from "../reducers/index";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = state => {
  return { todos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodo: status => dispatch(fetchTodoItems(status)),
    removeTodo: id => dispatch(removeTodos(id)),
    completeTodo: id => dispatch(completeTodos(id)),
    updateTodo: todoInfo => dispatch(updateTodoItems(todoInfo))
  }
};

const renderTodoList = (props, todoType) => {
  let filterList = props.todos;
  //console.log(props.fetchTodo(todoType));
  //if (todoType !== 'all') filterList = props.fetchTodo(todoType);
  return (
    filterList?.todos?.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        removeTodo={props.removeTodo}
        updateTodo={props.updateTodo}
        completeTodo={props.completeTodo}
      />
    ))
  )
}


const TodoList = (props) => {
  const [todoType, setTodoType] = useState('active');
  useEffect(() => {
    props.fetchTodo('');
  }, [])
  const onFilter = (props, status) => {
    setTodoType(status);
    status !== 'all' ? props.fetchTodo(status) : props.fetchTodo('');
  }
  return (
    <div className="displaytodos">
      <div className="buttons">
        {
          ['active', 'completed', 'all'].map(item => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onFilter(props, item)}
            >
              {item.toUpperCase()}
            </motion.button>
          ))
        }
      </div>
      <ul>
        <AnimatePresence>
          {renderTodoList(props, todoType)}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
