import { Props } from "./fetchIssues.type";
export const fetchIssues = ({ handleIssues, apiLink }: Props) => {
    console.log(apiLink);
    fetch(apiLink)
        .then(response => response.json())
        .then(data => {

            handleIssues(data.items);
        })
        .catch(err => {
            console.log(err);
        })
}