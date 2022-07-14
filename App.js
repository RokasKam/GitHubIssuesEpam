import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList, TextInput, TouchableOpacity, Dimensions, } from 'react-native';
import { Octokit } from "@octokit/rest";
import { Card, } from 'react-native-elements';
import { fetchIssues } from './src/service/fetchIssues/FetchIssues'

const App = () => {

  const [Issues, setIssues] = useState([]);
  const [authCode, setAuthCode] = useState("");
  //"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"
  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={styles.container}>
        <View style={styles.loginBlock}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              value={authCode}
              onChangeText={text => setAuthCode(text)}
              placeholder="Auth code"
              placeholderTextColor="white"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => fetchIssues({ handlerIssues: setIssues, authCode: authCode })}>
            <Text style={styles.loginText}>Find</Text>
          </TouchableOpacity>
        </View>
        <FlatList style={styles.listStyle}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    backgroundColor: "#b3ffc7",
    alignItems: "center",
  },
  inputView: {
    width: "60%",
    height: 50,
    backgroundColor: "#00bf33",
    borderRadius: 30,
  },
  textInput: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    color: "white",

  },
  loginBlock: {
    top: "10%",
    width: "100%",
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "30%",
    borderRadius: 30,
    marginLeft: 10,
    backgroundColor: "#323C4C",
  },
  loginText: {
    color: "white",
  },
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

export default App;
