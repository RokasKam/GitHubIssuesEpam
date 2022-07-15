
export const fetchIssues = ({ handlerIssues, organization, repository, pageNumper, currentIssues }) => {
    const ISSUES_PER_PAGE = 8;
    const apiLink = 'https://api.github.com/search/issues?q=is:issue+repo:'
        + organization + '/' + repository
        + '&per_page=' + ISSUES_PER_PAGE + '&page=' + pageNumper;
    console.log(apiLink);
    fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            handlerIssues([...currentIssues, ...data.items]);
        })
        .catch(err => {
            console.log(err);
        })
} 
    
 
    
