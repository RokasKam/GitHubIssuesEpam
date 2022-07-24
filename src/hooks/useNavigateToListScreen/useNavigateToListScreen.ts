import { useNavigation } from "@react-navigation/core";
import { useCallback } from "react";
import { Alert } from 'react-native';
import { Props, NavigateToList } from "./useNavigateToListScreen.type";

export const useNavigateToListScreen = () => {
    const { navigate } = useNavigation<NavigateToList>();
    const navigateToListScreen = useCallback(({ organization, repository, findIssues, findPullRequests, howToSort }: Props) => {
        findIssues || findPullRequests ?
            navigate('List', {
                organization: organization,
                repository: repository,
                whatIsBeingSearched: findIssues && findPullRequests ?
                    "" : (findIssues ? "is:issue+" : "is:pr+"),
                howToSort: howToSort
            }) :
            Alert.alert("One or more check box must be checked");
    }, [navigate]);

    return navigateToListScreen;
}


