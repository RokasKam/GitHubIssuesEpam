import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './ListScreen.style';
import { fetchIssues } from '../../service/fetchIssues';
import { IssuesList } from '../../components/IssuesList/IssuesList';

export const ListScreen = ({ route }) => {
    const [issues, setIssues] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const organization = route.params.organization;
    const repository = route.params.repository;
    const whatIsBeingSearched = route.params.whatIsBeingSearched;
    const howToSort = route.params.howToSort;

    const handleIssues = (newIssues) => {
        setIssues([...issues, ...newIssues]);
    }
    useEffect(() => {
        fetchIssues({
            handleIssues,
            organization,
            repository,
            pageNumber,
            whatIsBeingSearched,
            howToSort
        });
    }, [pageNumber]);

    return (
        <SafeAreaView style={styles.mainBlock}>
            <IssuesList
                issues={issues}
                handleOnEndReached={setPageNumber}
                currentPageNumber={pageNumber}
            />
        </SafeAreaView>
    );
};


