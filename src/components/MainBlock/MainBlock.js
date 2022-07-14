import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { LoginBlock } from "../LoginBlock/LoginBlock"
import { FlatListBlock } from "../FlatListBlock/FlatListBlock"

export const MainBlock = () => {

  const [Issues, setIssues] = useState([]);
  const [authCode, setAuthCode] = useState("");

  //"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"
  return (
    <SafeAreaView style={styles.mainBlock}>
      <LoginBlock
        authCode={authCode}
        setAuthCode={setAuthCode}
        setIssues={setIssues}
      />
      <FlatListBlock
        Issues={Issues}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    backgroundColor: "#b3ffc7",
    alignItems: "center",
  },
});
