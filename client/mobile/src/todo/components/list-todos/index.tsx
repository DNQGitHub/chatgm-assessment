import { Checkbox, FlatList, Pressable, Row, Text } from 'native-base';
import { ButtonEditTodo } from '../button-edit-todo';
import { ButtonDeleteTodo } from '../button-delete-todo';
import { useToDoContext } from '../../contexts';
import { EditToDoProvider } from '../../contexts/edit-todo-context/provider';

export const ListTodos = () => {
    const { todos } = useToDoContext();

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
                        <Checkbox value="true" accessibilityLabel="Todo checkbox" colorScheme={'gray'} />
                        <Text>{item.name}</Text>
                    </Row>

                    <Row flexDirection={'row'} style={{ gap: 8 }}>
                        <EditToDoProvider todo={item}>
                            <ButtonEditTodo />
                        </EditToDoProvider>

                        <ButtonDeleteTodo />
                    </Row>
                </Row>
            )}
        />
    );
};
