import React from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const DetailsScreen = ({
    route, navigation
}) => (
    <ScrollView>
        <View style={{
            padding:20,
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 40

            }}>Trabalho 1</Text>
        </View>
        <View style={{
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{width: 180, height: 350}} source={require('../photos/me.jpeg')} />
        </View>
        <View style={{
            padding: 20,
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize:20}}>Nome: {route.params.name}</Text>
            <Text style={{fontSize:20}}>R.A: {route.params.ra}</Text>
            <Text style={{fontSize:20}}>Curso: {route.params.course}</Text>
            <Text style={{fontSize:20}}>Idade: {route.params.age}</Text>
        </View>

        <View style={{
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity 
            style = {{
                padding: 20,
                marginBottom: 20,
                backgroundColor: "blue"
            }}
            onPress={() => navigation.goBack()}
            >
                <Text style={{
                    fontSize: 30,
                    color: 'white'
                }}>Voltar</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
);

export default DetailsScreen;
