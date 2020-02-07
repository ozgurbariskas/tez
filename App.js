import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import * as firebase from "firebase"
import LoadingScreen from "./screens/LoadingScreen"
import LoginScreen from "./screens/LoginScreen"
import PasswordForgetScreen from "./screens/PasswordForgetScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import MessageScreen from "./screens/MessageScreen"
import PostScreen from "./screens/PostScreen"
import SettingScreen from "./screens/SettingScreen"
import ChangePasswordScreen from "./screens/ChangePasswordScreen"
import BizeUlasScreen from "./screens/BizeUlasScreen"

import FirebaseKeys from "./Config.js"

import { Image } from "react-native"
import React from 'react';
import { Ionicons } from "@expo/vector-icons"



export default class App extends React.Component {

    render() {

        return (
            <AppContainer />
        );
    }
}


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseKeys);
}

const AppContainerStack = createStackNavigator(
    {
        default: createBottomTabNavigator({
            Home: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => {
                        return <Image style={{ width: 25, height: 30, tintColor: tintColor }} source={require("./assets/PetMatchLogoGri.png")} />
                    }
                }
            },
            Profile: {
                screen: ProfileScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={30} color={tintColor} />
                }
            },
            Post: {
                screen: PostScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add-circle" size={60} color="#E9446A"
                        style={{ shadowColor: "#E9446A", shadowOffset: { width: 0, height: 0 }, shadowRadius: 10, shadowOpacity: 0.3 }} />
                }
            },
            Message: {
                screen: MessageScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={30} color={tintColor} />
                }

            },
            Settings: {
                screen: createStackNavigator({
                    Setting: SettingScreen,
                    ChangePassword: ChangePasswordScreen,
                    BizeUlas: BizeUlasScreen,

                }),

                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-settings" size={30} color={tintColor} />
                }

            },

        },
            {
                
                tabBarOptions: {
                    activeTintColor: "#161F3D",
                    inactiveTintColor: "#B8BBC4",
                    showLabel: false
                }



            }
        ),
      
    },
    {
       
        headerMode:"none",
       
    }
)



const AuthStack = createStackNavigator({
    Login: LoginScreen,
    PasswordForget: PasswordForgetScreen,

});



const AppContainer = createAppContainer(

    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppContainerStack,
            Auth: AuthStack,
            Register: RegisterScreen,

        },
        {
            initialRouteName: "Loading",
        },

    )
);