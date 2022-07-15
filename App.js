import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen } from './src/screens/ListScreen/ListScreen';
import { MainScreen } from './src/screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen options={{ headerShown: false }} name="Search" component={MainScreen} />
        <Stack.Screen options={{ headerTransparent: true, title: "", headerTintColor: "green" }} name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
