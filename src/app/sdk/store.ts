import { createStore, combineReducers, applyMiddleware } from 'redux'

export interface Todo {
    todo: string;
    isDone: boolean;
};

interface TodoAction {
    type: string;
    payload: Todo
};

export interface AppState {
    todos: Array<Todo>;
    selected?: Todo;
};

const todosReducer = (state: Array<Todo> = [{todo: "First", isDone: false}], action: TodoAction) => {
    switch (action.type) {
        case "ADD_TODO":
            state.push(action.payload);
            return state;
        case "TODO_TOGGLE_DONE":
            const todo = state.find(todo => todo === action.payload);
            todo.isDone = !todo.isDone;
            return state;
        default:
            return state;
    }
}

const selectedTodoReducer = (state: Todo = null, action: TodoAction) => {
    switch (action.type) {
        case "TOGGLE_SELECT_TODO":
            if (state === action.payload) {
                state = null;
            } else if (state !== null) {
                state.todo = action.payload.todo;
                state.isDone = action.payload.isDone;
            } else {
                state = action.payload;
            }
            return state;
        default:
            return state;
    }
}



const reducers = combineReducers<AppState>({todos: todosReducer, selected: selectedTodoReducer})

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export const store = createStore(reducers, applyMiddleware(logger));

export const addTodo = (todoString: string) => store.dispatch({type: "ADD_TODO", payload: {todo: todoString, isDone: false}});
export const todoToggleDone = (todo: Todo) => store.dispatch({type: "TODO_TOGGLE_DONE", payload: todo});
export const toggleSelectTodo = (todo: Todo) => store.dispatch({type: "TOGGLE_SELECT_TODO", payload: todo});