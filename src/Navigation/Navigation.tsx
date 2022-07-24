import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen } from '../screens/ListScreen/ListScreen';
import { MainScreen } from '../screens/MainScreen/MainScreen';
import { NavigatorParams } from './Navigation.types';

const Stack = createNativeStackNavigator<NavigatorParams>();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen options={{ headerShown: false }} name="Search" component={MainScreen} />
                <Stack.Screen options={{ headerTransparent: true, title: "", headerTintColor: "green" }} name="List" component={ListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
