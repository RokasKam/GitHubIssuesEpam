import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './ListScreen.style';
import { fetchIssues } from '../../service/fetchIssues/FetchIssues';
import { FlatListBlock } from '../../components/FlatListBlock/FlatListBlock';

export const ListScreen = ({ route }) => {
    const [Issues, setIssues] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const organization = route.params.organization;
    const repository = route.params.repository;

    useEffect(() => {
        fetchIssues({
            handlerIssues: setIssues,
            organization: organization,
            repository: repository,
            pageNumper: pageNumber,
            currentIssues: Issues,
        });
    }, [pageNumber]);

    return (
        <SafeAreaView style={styles.mainBlock}>
            <FlatListBlock
                Issues={Issues}
                handleOnEndReached={setPageNumber}
                currentPageNumber={pageNumber}
            />
        </SafeAreaView>
    );
};


