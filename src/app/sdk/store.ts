import { createStore, combineReducers, applyMiddleware } from 'redux';

export interface Todo {
    todo: string;
    isDone: boolean;
}

interface TodoAction {
    type: string;
    payload: Todo;
}

export interface AppState {
    todos: Array<Todo>;
    selected?: Todo;
}

const todosReducer = (state: Array<Todo> = [{todo: 'First', isDone: false}], action: TodoAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TODO_TOGGLE_DONE':
        default:
            return state;
    }
};

const selectedTodoReducer = (state: Todo = null, action: TodoAction) => {
    switch (action.type) {
        case 'TOGGLE_SELECT_TODO':
            return state;
        default:
            return state;
    }
};



const reducers = combineReducers<AppState>({
    todos: todosReducer,
    selected: selectedTodoReducer
});

// tslint:disable-next-line:no-shadowed-variable
const logger = store => next => action => {
    console.log('current state', store.getState());
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};

export const store = createStore(reducers, applyMiddleware(logger));

export const todoToggleDone = (todo: Todo) => store.dispatch({type: 'TODO_TOGGLE_DONE', payload: todo});
export const toggleSelectTodo = (todo: Todo) => store.dispatch({type: 'TOGGLE_SELECT_TODO', payload: todo});