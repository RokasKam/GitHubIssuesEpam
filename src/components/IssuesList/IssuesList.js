import React from 'react'
import { FlatList } from 'react-native';
import { styles } from './IssuesList.style';
import { ListCard } from '../ListCard/ListCard';
const END_REACHED_TRESHOLD = 0.5;
export const IssuesList = ({ issues, handleOnEndReached, currentPageNumber }) => {

    const onEndReachedHandler = () => handleOnEndReached(currentPageNumber + 1);
    return (
        < FlatList style={styles.listStyle}
            data={issues}
            onEndReached={onEndReachedHandler}
            onEndReachedThreshold={END_REACHED_TRESHOLD}
            renderItem={({ item }) =>
                <ListCard
                    itemId={item.id}
                    itemTitle={item.title}
                />
            }
        />
    )
};

