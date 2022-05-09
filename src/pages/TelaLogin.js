import React, { useState } from 'react'
import { TextInput, SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

function TelaLogin ({navigation}) {
    const [text, onChangeText] = useState();
    const [number, onChangeNumber] = useState();
    return (
        <SafeAreaView style={{flexGrow: 1, justifyContent: 'center'}}>
            <View>
                <TextInput placeholder='Email' style={styles.input} onChangeText={onChangeText} value={text}/>
                <TextInput placeholder='Password' style={styles.input} onChangeNumber={onChangeNumber} value={number} secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={{color: 'white', fontSize: 16, lineHeight: 21}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', padding: 15}}>
                <Text style={{color: 'black', lineHeight: 21}}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', padding: 2}}>
                <Text style={{color: 'black', lineHeight: 21}}>Forgot Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },

    input: {
        borderRadius: 7,
        margin: 5,
        borderWidth: 1,
    },

    button: {
        marginLeft: '35%',
        maxWidth: '30%',
        padding: 10,
        borderRadius: 7,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
    }
})

 export default TelaLogin