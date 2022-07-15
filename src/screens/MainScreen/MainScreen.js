import React, { useState } from 'react'
import { View, SafeAreaView, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { SearchInput } from '../../components/SearchTextInput/SearchInput';
import { styles } from './MainScreen.style';

export const MainScreen = () => {

    const navigation = useNavigation();
    const [organization, setOrganization] = useState("");
    const [repository, setRepository] = useState("");
    const onPress = () => navigation.navigate("List", {
        organization: organization,
        repository: repository,
    });
    return (
        <SafeAreaView style={styles.mainBlock}>
            <View style={styles.loginBlock}>
                <SearchInput
                    value={organization}
                    textHandler={setOrganization}
                    placeholder={"Organization"}
                />
                <SearchInput
                    value={repository}
                    textHandler={setRepository}
                    placeholder={"Repository"}
                />
                <SearchButton
                    onPress={onPress}
                    text={"Find"}
                />
            </View>
        </SafeAreaView>
    )
};

