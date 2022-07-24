import React from 'react'
import { Text, TouchableOpacity, } from 'react-native';
import { styles } from './SearchButton.styles';
import { Props } from './SearchButton.type';

export const SearchButton: React.FC<Props> = ({ onPress, text }) => {

    return (
        <TouchableOpacity
            style={styles.loginButton}
            onPress={onPress}>
            <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
    )
};

