import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditTodoDto } from '@todo/dtos';
import { TodoModel } from '@todo/models';

interface TodoState {
    todos: Array<TodoModel>;
}

const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        newTodoAdded: (state, { payload, type }: PayloadAction<{ newTodo: TodoModel }>) => {
            const { newTodo } = payload;
            state.todos.unshift(newTodo);
        },
        todoUpdated: (state, { payload, type }: PayloadAction<{ todoId: string; dto: EditTodoDto }>) => {
            const { todoId, dto } = payload;
            const updatedTodoIndex = state.todos.findIndex((i) => i.id == todoId);
            state.todos[updatedTodoIndex].name = dto.name;
        },
        todoIsDoneUpdated: (state, { payload, type }: PayloadAction<{ todoId: string; isDone: boolean }>) => {
            const { todoId, isDone } = payload;
            const updatedTodoIndex = state.todos.findIndex((i) => i.id == todoId);
            state.todos[updatedTodoIndex].isDone = isDone;
        },
        todoDeleted: (state, { payload, type }: PayloadAction<{ todoId: string }>) => {
            const { todoId } = payload;
            state.todos = state.todos.filter((i) => i.id != todoId);
        },
    },
});

export const todoActions = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

export const selectTodos = (state: any): Array<TodoModel> => state[todoSlice.name].todos;
