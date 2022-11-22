import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity>
                <Text>Chuyển sang màn Todolist</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;