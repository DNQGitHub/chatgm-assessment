import React from 'react';
import { useAddNewTodoContext } from '@todo/contexts';
import { Button, Text, View, Modal, FormControl, Input } from 'native-base';

export const ButtonAddNewTodo = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const { form } = useAddNewTodoContext();

    return (
        <>
            <Button
                testID="button-add-new-todo"
                colorScheme={'gray'}
                shadow={'5'}
                onPress={() => setModalVisible(true)}
            >
                <Text color="white">+ New Todo</Text>
            </Button>

            <Modal isOpen={modalVisible} onClose={setModalVisible} colorScheme={'gray'}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Add New Todo</Modal.Header>
                    <Modal.Body>
                        <View>
                            <FormControl isInvalid={!!form.errors.name}>
                                <FormControl.Label>Name</FormControl.Label>
                                <Input
                                    testID="input-name"
                                    onChangeText={form.handleChange('name')}
                                    value={form.values.name}
                                />
                                <FormControl.ErrorMessage testID="input-name-error-message">
                                    {form.errors.name}
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </View>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                testID="button-cancel-add-new-todo"
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                testID="button-submit-add-new-todo"
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
