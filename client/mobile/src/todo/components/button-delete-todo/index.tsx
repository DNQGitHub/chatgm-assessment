import { Button, Modal, Pressable, Text } from 'native-base';
import React from 'react';
import { useDeleteTodoContext } from '@todo/contexts';

export const ButtonDeleteTodo = () => {
    const { todo, modalVisible, handleConfirm, handleSetModalVisible } = useDeleteTodoContext();

    return (
        <>
            <Pressable onPress={() => handleSetModalVisible(true)}>
                <Text style={{ textDecorationLine: 'underline' }}>Delete</Text>
            </Pressable>

            <Modal isOpen={modalVisible} onClose={handleSetModalVisible} colorScheme={'gray'}>
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
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    handleSetModalVisible(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
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
