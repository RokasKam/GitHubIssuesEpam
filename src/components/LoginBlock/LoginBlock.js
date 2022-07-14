import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet,} from 'react-native';

const LoginBlock: (authCode, setAuthCode, fetchIssues) => Node = () => {
    return(
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
            onPress={fetchIssues}>
            <Text style={styles.loginText}>Find</Text>
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

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
  });

  export default LoginBlock;