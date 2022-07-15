import React from 'react'
import { Text, TouchableOpacity, } from 'react-native';
import { styles } from './SearchButton.styles';

export const SearchButton = ({ onPress, text }) => {

    return (
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => onPress()}>
            <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
    )
};

