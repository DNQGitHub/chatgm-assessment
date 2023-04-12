import { Pressable, Text } from 'native-base';

export const ButtonEditTodo = () => {
    return (
        <Pressable>
            <Text style={{ textDecorationLine: 'underline' }}>Edit</Text>
        </Pressable>
    );
};
