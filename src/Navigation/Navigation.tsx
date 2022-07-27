import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, ListScreen } from '../screens';
import { NavigatorParams } from './Navigation.types';

const Stack = createNativeStackNavigator<NavigatorParams>();

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen options={{ headerShown: false }} name="Search" component={MainScreen} />
                <Stack.Screen options={{ headerTransparent: true, title: "", headerTintColor: "green" }} name="List" component={ListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
