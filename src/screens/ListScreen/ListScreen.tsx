import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './ListScreen.style';
import { IssuesList } from '../../components';
import { useFetchIssuesOnPageChange } from '../../hooks/useFetchIssuesOnPageChange/useFetchIssuesOnPageChange';
import { Props } from './ListScreen.type';

export const ListScreen: React.FC<Props> = ({ route }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const issues = useFetchIssuesOnPageChange(pageNumber, route.params);

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

