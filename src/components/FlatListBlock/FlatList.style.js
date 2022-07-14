import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
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