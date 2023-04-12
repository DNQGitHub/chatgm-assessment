import { PropsWithChildren } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const LayoutMain = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    minHeight: 72,

                    backgroundColor: '#cccccc',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                    }}
                >
                    TODO
                </Text>

                {/* <TouchableOpacity
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 4,

                        paddingVertical: 8,
                        paddingHorizontal: 12,
                    }}
                >
                    <Text>+ New</Text>
                </TouchableOpacity> */}
            </View>

            {/* Body */}
            <View style={{ flex: 1 }}>{children}</View>

            <StatusBar style="auto" translucent />
        </SafeAreaView>
    );
};
