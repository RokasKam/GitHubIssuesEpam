import React from 'react'
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './ListCard.style';
import { Props } from './ListCard.type';

export const ListCard: React.FC<Props> = ({ itemId, itemTitle }) => {
    return (
        //@ts-ignore
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
