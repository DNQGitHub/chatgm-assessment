import { Button, Modal, Pressable, Text } from 'native-base';
import React from 'react';
import { useDeleteToDoContext } from '../../contexts';

export const ButtonDeleteTodo = () => {
    const [showModal, setShowModal] = React.useState(false);
    const { todo, handleConfirm } = useDeleteToDoContext();

    return (
        <>
            <Pressable onPress={() => setShowModal(true)}>
                <Text style={{ textDecorationLine: 'underline' }}>Delete</Text>
            </Pressable>

            <Modal isOpen={showModal} onClose={setShowModal} colorScheme={'gray'}>
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
                                    setShowModal(false);
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
