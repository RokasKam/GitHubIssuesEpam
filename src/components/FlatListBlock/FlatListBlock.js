import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Card, } from 'react-native-elements';
import { styles } from './FlatList.style';

export const FlatListBlock = ({ Issues }) => {
    return (
        < FlatList style={styles.listStyle}
            data={Issues}
            renderItem={({ item }) =>
                <View >
                    <Card containerStyle={styles.cardStyle}>
                        <View>
                            <Text style={styles.cardTextStyle}>
                                {item.title}
                            </Text>
                        </View>
                        <View >
                            <Text style={styles.cardTextStyle}>
                                {item.repository.name}
                            </Text>
                        </View>
                    </Card>
                </View>}
        />
    )
};

