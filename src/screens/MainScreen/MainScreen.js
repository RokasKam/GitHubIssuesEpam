import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import { SearchInput } from '../../components/SearchTextInput/SearchInput';
import { CheckBoxBlock } from '../../components/CheckBoxBlock/CheckBoxBlock';
import { DropDownBlock } from '../../components/DropDownBlock/DropDownBlock';
import { NavigateToListScreen } from '../../service/NavigateToListScreen/NavigateToListScreen';
import { styles } from './MainScreen.style';

export const MainScreen = () => {

    const navigation = useNavigation();
    const [findIssues, setFindIssues] = useState(true);
    const [findPullRequests, setFindPullRequests] = useState(false);
    const [organization, setOrganization] = useState("");
    const [repository, setRepository] = useState("");
    const [howToSort, setHowToSort] = useState('created');

    const onPress = () => NavigateToListScreen({
        navigation: navigation,
        organization: organization,
        repository: repository,
        findIssues: findIssues,
        findPullRequests: findPullRequests,
        howToSort: howToSort
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
                <DropDownBlock
                    value={howToSort}
                    setValue={setHowToSort}
                />
                <SearchButton
                    onPress={onPress}
                    text={"Find"}
                />

            </View>
        </SafeAreaView >
    )
};

