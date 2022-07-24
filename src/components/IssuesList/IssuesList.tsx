import React from 'react'
import { FlatList } from 'react-native';
import { styles } from './IssuesList.style';
import { ListCard } from '../ListCard';
import { Props } from './IssuesList.type';
const END_REACHED_TRESHOLD = 0.5;

export const IssuesList: React.FC<Props> = ({ issues, handleOnEndReached, currentPageNumber }) => {

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

