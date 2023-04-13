import { Button, Text, View, Modal, FormControl, Input } from 'native-base';
import React from 'react';
import { useAddNewTodoContext } from '../../contexts';

export const ButtonAddNewTodo = () => {
    const [showModal, setShowModal] = React.useState(false);
    const { form } = useAddNewTodoContext();

    return (
        <>
            <Button colorScheme={'gray'} onPress={() => setShowModal(true)}>
                <Text color="white">+ New Todo</Text>
            </Button>

            <Modal isOpen={showModal} onClose={setShowModal} colorScheme={'gray'}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Add New Todo</Modal.Header>
                    <Modal.Body>
                        <View>
                            <FormControl isInvalid={!!form.errors.name}>
                                <FormControl.Label>Name</FormControl.Label>
                                <Input onChangeText={form.handleChange('name')} value={form.values.name} />
                                <FormControl.ErrorMessage>{form.errors.name}</FormControl.ErrorMessage>
                            </FormControl>
                        </View>
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
                                    form.handleSubmit();
                                }}
                            >
                                Add
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
};
