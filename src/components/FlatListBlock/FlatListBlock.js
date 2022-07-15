import React from 'react'
import { FlatList } from 'react-native';
import { styles } from './FlatListBlock.style';
import { ListCard } from '../ListCard/ListCard';

export const FlatListBlock = ({ Issues, handleOnEndReached, currentPageNumber }) => {
    const END_REACHED_TRESHOLD = 0.5;
    const onEndReachedHandler = () => handleOnEndReached(currentPageNumber + 1);
    return (
        < FlatList style={styles.listStyle}
            data={Issues}
            onEndReached={() => onEndReachedHandler()}
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

