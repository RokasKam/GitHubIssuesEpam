import { Octokit } from "@octokit/rest";
export const fetchIssues = ({ handlerIssues, authCode }) => {
   
    const octokit = new Octokit({
        auth: authCode,
    });
    octokit.issues.list()
        .then(result => {
            handlerIssues(result.data);
        })
        .catch(err => {
            console.log(err);
        })
};


