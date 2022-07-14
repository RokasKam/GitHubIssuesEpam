import React from 'react'
import { Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { fetchIssues } from '../../service/fetchIssues/FetchIssues'
import { styles } from './LoginBlock.style';

export const LoginBlock = ({ authCode, setAuthCode, setIssues }) => {

    const onGetIssuesPress = () => fetchIssues({ handlerIssues: setIssues, authCode: authCode });

    return (
        <View style={styles.loginBlock}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    value={authCode}
                    onChangeText={text => setAuthCode(text)}
                    placeholder="Auth code"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => onGetIssuesPress()}>
                <Text style={styles.loginText}>Find</Text>
            </TouchableOpacity>
        </View>
    )
};

