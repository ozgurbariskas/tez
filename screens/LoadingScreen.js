import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import * as firebase from "firebase"
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient'
import FirebaseKeys from "../Config";

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseKeys);
}
export default class LoadingScreen extends React.Component {


    state = {
        fontLoad: false,
    }
    componentDidMount() {

        setTimeout(() => {
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? "App" : "Auth");
            })
        }, 3000);
    }




    render() {
        return (
            <ImageBackground
                source={require("../assets/loadingBackground.jpg")}
                style={{ width: "100%", height: '100%' }}
            ></ImageBackground>
        );
    }

};

