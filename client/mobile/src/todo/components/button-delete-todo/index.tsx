import { Pressable, Text } from 'native-base';

export const ButtonDeleteTodo = () => {
    return (
        <Pressable>
            <Text style={{ textDecorationLine: 'underline' }}>Delete</Text>
        </Pressable>
    );
};
