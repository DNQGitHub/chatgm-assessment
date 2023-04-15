import { Button, FormControl, Input, Modal, Pressable, Text, View } from 'native-base';
import React from 'react';
import { EditTodoState, useEditTodoContext } from '@todo/contexts';

export const ButtonEditTodo = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const { form, state } = useEditTodoContext();

    React.useEffect(() => {
        if (state == EditTodoState.SUBMIT_SUCCEEDED) {
            setModalVisible(false);
        }
    }, [state]);

    return (
        <>
            <Pressable testID="button-edit-todo" onPress={() => setModalVisible(true)}>
                <Text style={{ textDecorationLine: 'underline' }}>Edit</Text>
            </Pressable>

            <Modal isOpen={modalVisible} onClose={setModalVisible} colorScheme={'gray'}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Edit Todo</Modal.Header>
                    <Modal.Body>
                        <View>
                            <FormControl isInvalid={!!form.errors.name}>
                                <FormControl.Label>Name</FormControl.Label>
                                <Input
                                    testID="input-name"
                                    onChangeText={form.handleChange('name')}
                                    value={form.values.name}
                                />
                                <FormControl.ErrorMessage>{form.errors.name}</FormControl.ErrorMessage>
                            </FormControl>
                        </View>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                testID="button-cancel-edit-todo"
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                testID="button-submit-edit-todo"
                                colorScheme={'gray'}
                                onPress={() => {
                                    form.handleSubmit();
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
};
