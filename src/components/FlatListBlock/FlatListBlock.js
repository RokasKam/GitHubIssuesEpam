import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Card, } from 'react-native-elements';

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
const styles = StyleSheet.create({
    listStyle: {
      marginTop: 30
    },
    cardStyle: {
      color: "white",
      height: Dimensions.get("screen").height / 9,
      width: Dimensions.get("window").width / 1.2,
      borderRadius: 15,
      padding: 15,
      marginTop: 15,
      marginLeft: 8,
      marginBottom: 8,
      marginRight: 8,
    },
    cardTextStyle: {
      fontFamily: "Hiragino sans",
      marginBottom: 10,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: Dimensions.get("screen").height / 47,
    },
  });
