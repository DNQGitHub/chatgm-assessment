import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LayoutMain } from '../../layouts';

export const ScreenHome = () => {
    return (
        <LayoutMain>
            <View style={{ marginVertical: 16 }}>
                <ScrollView horizontal style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', gap: 12 }}>
                        <TouchableOpacity
                            style={{
                                minWidth: 96,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                                backgroundColor: '#efefef',
                                borderWidth: 1,
                                borderColor: '#efefef',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                minWidth: 96,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                                // backgroundColor: '#efefef',
                                borderWidth: 1,
                                borderColor: '#efefef',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Pending</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                minWidth: 96,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                                // backgroundColor: '#efefef',
                                borderWidth: 1,
                                borderColor: '#efefef',
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <FlatList
                style={{ paddingHorizontal: 20 }}
                data={[
                    {
                        id: 1,
                        name: 'Name A',
                        isDone: false,
                    },
                ]}
                renderItem={({ item }: any) => (
                    <View
                        key={item.id}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            minHeight: 72,
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            borderWidth: 1,
                            borderColor: '#111111',
                            borderRadius: 8,
                        }}
                    >
                        <View>
                            <Text style={{}}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline' }}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 30,
                    bottom: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 52,
                    height: 52,
                    borderWidth: 1,
                    borderRadius: 26,
                }}
            >
                <Text>+</Text>
            </TouchableOpacity>
        </LayoutMain>
    );
};
