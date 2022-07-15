import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    cardStyle: {
        color: "white",
        height: Dimensions.get("screen").height / 7,
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
        fontSize: Dimensions.get("screen").height / 60,
    },
});