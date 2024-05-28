import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoItemResource from "../resources/todo-item.resource";
const initialState = [];

export const fetchTodoItems = createAsyncThunk('todos/fetchTodos', async (status) => {
  const response = await todoItemResource.fetch(status);
  return response.data
})

export const updateTodoItems = createAsyncThunk('todos/updateTodos', async (item) => {
  console.log(item);
  const response = await todoItemResource.update(item,item.id);
  return response.data
})

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      //state.push(action.payload)

      return state
    },
    removeTodos: (state, action) => {
      
      //return state.filter((item) => item.id !== action.payload)
    },
    updateTodos: (state, action) => {
      // const { id, item } = action.payload;
      // return updateTodoItems
      // return state.map(todo => {
      //   return todo.id === id ? { ...todo, item, } : todo;
      // });
    },
    completeTodos: (state, action) => {
      // return state.map(todo => {
      //   return todo.id === action.payload ? { ...todo, completed: true } : todo;
      // });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodoItems.fulfilled, (state, action) => {
      return action.payload
    })
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
