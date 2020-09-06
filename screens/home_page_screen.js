import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

const HomePageScreen = ({
    navigation,
}) => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        
        <TouchableOpacity 
        style = {{
            padding: 20,
            backgroundColor: "blue"
        }}
        onPress={() => {
            navigation.navigate('Details', {
                name: "Bruno Noveli",
                ra: 95110,
                course: "Engenharia da Computação",
                age: 21
            })
        }}
        >
            <Text style={{
                fontSize: 30,
                color: 'white'
            }}>Detalhes</Text>
        </TouchableOpacity>

    </View>
);

export default HomePageScreen;
