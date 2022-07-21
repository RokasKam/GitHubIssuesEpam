import { useNavigation } from "@react-navigation/core";
import { useCallback } from "react";

export const useNavigateToListScreen = () =>{
    const {navigate} = useNavigation();
    const navigateToListScreen = useCallback(({ organization, repository, findIssues, findPullRequests, howToSort }) => {
        findIssues || findPullRequests ?
            navigate("List", {
                organization: organization,
                repository: repository,
                whatIsBeingSearched: findIssues && findPullRequests ?
                    "" : (findIssues ? "is:issue+" : "is:pr+"),
                howToSort: howToSort
            }) :
            alert("One or more check box must be checked");
    }, [navigate]);

    return navigateToListScreen;
}