import { Checkbox, FlatList, Row, Text } from 'native-base';
import { ButtonEditTodo } from '@todo/components/button-edit-todo';
import { ButtonDeleteTodo } from '@todo/components/button-delete-todo';
import { EditTodoProvider } from '@todo/contexts/edit-todo-context/provider';
import { DeleteTodoProvider } from '@todo/contexts/delete-todo-context/provider';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, todoActions } from '@todo/redux/slices';

export const ListTodos = () => {
    const todos = useSelector(selectTodos);

    const dispatch = useDispatch();

    return (
        <FlatList
            paddingX={'20px'}
            data={todos}
            renderItem={({ item, index }: any) => (
                <Row
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    paddingX={'16px'}
                    paddingY={'20px'}
                    backgroundColor={'gray.100'}
                    borderRadius={4}
                    marginBottom={index == todos.length - 1 ? '64px' : '8px'}
                >
                    <Row flexDirection={'row'} style={{ gap: 8 }}>
                        <Checkbox
                            value="true"
                            onChange={(checked) => {
                                dispatch(todoActions.todoIsDoneUpdated({ todoId: item.id, isDone: checked }));
                            }}
                            accessibilityLabel="Todo checkbox"
                            colorScheme={'gray'}
                            isChecked={item.isDone}
                        />
                        <Text>{item.name}</Text>
                    </Row>

                    <Row flexDirection={'row'} style={{ gap: 8 }}>
                        <EditTodoProvider todo={item}>
                            <ButtonEditTodo />
                        </EditTodoProvider>

                        <DeleteTodoProvider todo={item}>
                            <ButtonDeleteTodo />
                        </DeleteTodoProvider>
                    </Row>
                </Row>
            )}
        />
    );
};
