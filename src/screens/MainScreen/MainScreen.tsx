import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native';
import { CheckBoxBlock, DropDownBlock, SearchButton, SearchInput } from '../../components';
import { useNavigateToListScreen } from '../../hooks';
import { styles } from './MainScreen.style';

export const MainScreen: React.FC = () => {

    const navigateToListScreen = useNavigateToListScreen();
    const [findIssues, setFindIssues] = useState(true);
    const [findPullRequests, setFindPullRequests] = useState(false);
    const [organization, setOrganization] = useState<string>();
    const [repository, setRepository] = useState<string>();
    const [howToSort, setHowToSort] = useState('created');

    const onPress = () => navigateToListScreen({
        organization,
        repository,
        findIssues,
        findPullRequests,
        howToSort
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

