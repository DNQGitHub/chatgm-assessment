import { Button, Modal, Pressable, Text } from 'native-base';
import React from 'react';
import { DeleteTodoState, useDeleteTodoContext } from '@todo/contexts';

export const ButtonDeleteTodo = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const { todo, state, handleConfirm } = useDeleteTodoContext();

    React.useEffect(() => {
        if (state == DeleteTodoState.SUBMIT_SUCCEEDED) {
            setModalVisible(false);
        }
    }, [state]);

    return (
        <>
            <Pressable testID="button-delete-todo" onPress={() => setModalVisible(true)}>
                <Text style={{ textDecorationLine: 'underline' }}>Delete</Text>
            </Pressable>

            <Modal isOpen={modalVisible} onClose={setModalVisible} colorScheme={'gray'}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Delete Todo</Modal.Header>
                    <Modal.Body>
                        <Text>
                            Are you sure to delete <Text fontWeight={'bold'}>{todo.name}</Text>?
                        </Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                testID="button-cancel-delete-todo"
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                testID="button-confirm-delete-todo"
                                colorScheme={'gray'}
                                onPress={() => {
                                    handleConfirm();
                                }}
                            >
                                Delete
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
};
