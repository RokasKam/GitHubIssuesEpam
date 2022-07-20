import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { SearchInput } from '../../components/SearchTextInput/SearchInput';
import { CheckBoxBlock } from '../../components/CheckBoxBlock/CheckBoxBlock';
import { NavigateToListScreen } from '../../service/NavigateToListScreen/NavigateToListScreen';
import { styles } from './MainScreen.style';

export const MainScreen = () => {

    const navigation = useNavigation();
    const [findIssues, setFindIssues] = useState(true);
    const [findPullRequests, setFindPullRequests] = useState(false);
    const [organization, setOrganization] = useState("");
    const [repository, setRepository] = useState("");

    const onPress = () => NavigateToListScreen({
        navigation: navigation,
        organization: organization,
        repository: repository,
        findIssues: findIssues,
        findPullRequests: findPullRequests
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
                <CheckBoxBlock
                    text={"Issues"}
                    value={findIssues}
                    setValue={setFindIssues}
                />
                <CheckBoxBlock
                    text={"Pull requests"}
                    value={findPullRequests}
                    setValue={setFindPullRequests}
                />
                <SearchButton
                    onPress={onPress}
                    text={"Find"}
                />

            </View>
        </SafeAreaView >
    )
};

