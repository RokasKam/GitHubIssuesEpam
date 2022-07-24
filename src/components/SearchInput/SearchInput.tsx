import React from 'react'
import { View, TextInput, } from 'react-native';
import { styles } from './SearchInput.style';
import { Props } from './SearchInput.type';

export const SearchInput: React.FC<Props> = ({ value, textHandler, placeholder }) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={text => textHandler?.(text)}
                placeholder={placeholder}
                placeholderTextColor="white"
                autoCapitalize="none"
            />
        </View>

    )
};

