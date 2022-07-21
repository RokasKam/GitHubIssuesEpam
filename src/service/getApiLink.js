const ISSUES_PER_PAGE = 15;
export const getApiLink = ({ organization, repository, pageNumber, whatIsBeingSearched, howToSort }) => {
    return `https://api.github.com/search/issues?q=${whatIsBeingSearched}repo:${organization}/${repository}
        &per_page=${ISSUES_PER_PAGE}&page=${pageNumber}&sort=${howToSort}`;
}