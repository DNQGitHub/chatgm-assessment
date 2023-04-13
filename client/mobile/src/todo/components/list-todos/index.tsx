import { Checkbox, FlatList, Row, Text } from 'native-base';
import { ButtonEditTodo, ButtonDeleteTodo } from '@todo/components';
import { useTodoContext } from '@todo/contexts';
import { EditTodoProvider } from '@todo/contexts/edit-todo-context/provider';
import { DeleteTodoProvider } from '@todo/contexts/delete-todo-context/provider';

export const ListTodos = () => {
    const { todos, checkTodoDone } = useTodoContext();

    return (
        <FlatList
            paddingX={'20px'}
            data={todos}
            renderItem={({ item }: any) => (
                <Row
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    borderWidth={1}
                    paddingX={'16px'}
                    paddingY={'20px'}
                    borderRadius={4}
                    marginBottom={'8px'}
                >
                    <Row flexDirection={'row'} style={{ gap: 8 }}>
                        <Checkbox
                            value="true"
                            onChange={(checked) => {
                                checkTodoDone(item.id, checked);
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