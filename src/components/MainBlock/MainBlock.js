import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { LoginBlock } from "../LoginBlock/LoginBlock"
import { FlatListBlock } from "../FlatListBlock/FlatListBlock"
import { styles } from './MainBlock.style';

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


