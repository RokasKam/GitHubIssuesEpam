import React from 'react'
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './ListCard.style';

export const ListCard = ({ itemId, itemTitle }) => {
    return (
        <Card containerStyle={styles.cardStyle}>
            <View>
                <Text style={styles.cardTextStyle}>
                    {itemTitle}
                </Text>
            </View>
            <View >
                <Text style={styles.cardTextStyle}>
                    {itemId}
                </Text>
            </View>
        </Card>
    )
};
