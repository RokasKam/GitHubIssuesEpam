
export const fetchIssues = ({ handlerIssues, organization, repository, pageNumper, currentIssues, whatIsBeingSearched }) => {
    const ISSUES_PER_PAGE = 8;
    const apiLink = 'https://api.github.com/search/issues?q=' + whatIsBeingSearched + 'repo:'
        + organization + '/' + repository
        + '&per_page=' + ISSUES_PER_PAGE + '&page=' + pageNumper;
    fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            handlerIssues([...currentIssues, ...data.items]);
        })
        .catch(err => {
            console.log(err);
        })
} 