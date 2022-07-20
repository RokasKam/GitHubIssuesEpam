
export const NavigateToListScreen = ({ navigation, organization, repository, findIssues, findPullRequests, howToSort }) => {
    findIssues || findPullRequests ?
        navigation.navigate("List", {
            organization: organization,
            repository: repository,
            whatIsBeingSearched: findIssues && findPullRequests ?
                "" : (findIssues ? "is:issue+" : "is:pr+"),
            howToSort: howToSort
        }) :
        alert("One or more check box must be checked");
}