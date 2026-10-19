import { createDrawerNavigator } from "@react-navigation/drawer";
import{ NavigationContainer } from "@react-navigation/native";
import {statusbar} from "expo-status-bar";
import React from "react";
import {stylesheet} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

  const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <GestureHandlerRootView>
        <navigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        </navigationContainer>
        <statusbar style="auto" />
    </GestureHandlerRootView>
  )}
