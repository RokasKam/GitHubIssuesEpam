import { useEffect, useState } from "react";
import { fetchIssues } from "../../service/fetchIssues/fetchIssues";
import { getApiLink } from "../../service/getApiLink/getApiLink";
import { Params } from "./useFetchIssuesOnPageChange.type";

export const useFetchIssuesOnPageChange = (pageNumber: number, params: Params) => {
    const [issues, setIssues] = useState<any>([]);
    const organization = params.organization;
    const repository = params.repository;
    const whatIsBeingSearched = params.whatIsBeingSearched;
    const howToSort = params.howToSort;

    const handleIssues = (newIssues: any) => {
        setIssues([...issues, ...newIssues]);
    }

    useEffect(() => {
        fetchIssues({
            handleIssues,
            apiLink: getApiLink({
                organization,
                repository,
                pageNumber,
                whatIsBeingSearched,
                howToSort
            })
        });
    }, [pageNumber]);

    return issues;
}