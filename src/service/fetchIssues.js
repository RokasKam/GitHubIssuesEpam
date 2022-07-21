import { getApiLink } from "./getApiLink";
export const fetchIssues = ({ handleIssues, organization, repository, pageNumber, whatIsBeingSearched, howToSort }) => {
    const apiLink = getApiLink({ organization, repository, pageNumber, whatIsBeingSearched, howToSort });
    fetch(apiLink)
        .then(response => response.json())
        .then(data => {

            handleIssues(data.items);
        })
        .catch(err => {
            console.log(err);
        })
}