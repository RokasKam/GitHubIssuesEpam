import React from 'react'
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './CheckBoxBlock.style';

export const CheckBoxBlock = ({ text, value, setValue }) => {

    return (

        <View style={styles.checkBoxBlock}>
            <CheckBox
                value={value}
                onValueChange={() => {
                    setValue(!value)
                }}
                tintColors={{ true: "#00bf33", false: 'gray' }}
                onTintColor="#00bf33"
                onCheckColor="#00bf33"
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
};

