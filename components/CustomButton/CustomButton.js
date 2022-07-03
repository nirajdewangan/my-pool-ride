import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Center } from 'native-base'

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
    return (
        <Pressable onPress={onPress} style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {},
            ]}>
            <Text style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
                ]}>
                    {text}
                </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
    text_TERTIARY: {
        color: "#808080"
    }
})

export default CustomButton