import React from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, Image, LayoutAnimation, StatusBar, SafeAreaView
} from 'react-native';
import * as firebase from "firebase"
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient'

import FirebaseKeys from "../Config";

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseKeys);
}
export default class LoginScreen extends React.Component {

    static navigationOptions = {
        headerShown: false
    }

    
    state = {
        email: "",
        password: "",
        errorMessage: null,
        fontLoaded: false,
    }

    handleLogin = () => {
        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
    }

    async componentDidMount() {
        await Font.loadAsync({
            'font1': require('../assets/fonts/DJBHunkyChunk.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
       
        LayoutAnimation.easeInEaseOut();
        return (

            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

                <SafeAreaView style={styles.container}>

                    <View style={{ flex: 268 }}>

                    </View>


                    <View style={styles.viewLogo}>
                        <LinearGradient colors={['#620232', '#F92B7F']}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center', borderRadius: 30, width: "40%", height: "100%"
                            }}>

                            <Image
                                source={require("../assets/PetMatchLogo.png")}
                                style={styles.logoStyle}
                            ></Image>


                        </LinearGradient>
                    </View>
                    <View style={{ flex: 30 }}>

                    </View>


                    <View style={{ flex: 142 }}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.greeting}>{"PET MATCH"}</Text>
                            ) : null
                        }
                    </View>
                    <View style={{ flex: 125 }}>

                    </View>




                    <View style={styles.errormessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>


                    <View style={{ flex: 125 }}>

                    </View>



                    <View style={styles.form}>

                        <View style={{ flex: 190 }}>
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput style={styles.input}
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            >

                            </TextInput>
                        </View>
                        <View style={{ flex: 40 }}>

                        </View>
                        <View style={{ flex: 190 }}>
                            <Text style={styles.inputTitle}>Parola</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            >
                            </TextInput>
                        </View>



                        <View style={{ flex: 29 }}>

                        </View>



                        <View style={styles.passwordReminder}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("PasswordForget")} >
                                <Text>Parolanı mı unuttun?</Text>
                            </TouchableOpacity>

                        </View>



                    </View>

                    <View style={{ flex: 157 }}>

                    </View>



                    <View style={{ flex: 157 }}>
                        <LinearGradient
                            colors={['#620232', '#F92B7F']}
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                            style={{ marginHorizontal: "8%", height: "100%" }}
                        >
                            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                                <Text style={{ color: "#FFFFFF", fontWeight: "500" }}>Giriş Yap</Text>
                                <Image
                                    source={require("../assets/PetMatchLogo.png")}
                                    style={styles.girisLogoStyle}
                                ></Image>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>



                    <View style={{ flex: 50 }}>

                    </View>


                    <View style={{ flex: 157 }}>
                        <TouchableOpacity style={styles.facebookButton} onPress={this.handleLogin}>
                            <Text style={{ color: "#FFF", fontWeight: "500" }}>Facebook'la Giriş Yap</Text>
                            <Image
                                source={require("../assets/facebookLogo.png")}
                                style={styles.girisLogoStyle}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 94 }}>

                    </View>


                    <View style={styles.toSignUp}>
                        <Text style={{ color: "#414959", fontSize: 13, opacity: 0.5 }}>Henüz hesabınız yok mu?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>

                            <Text style={{ color: "#A20453", fontWeight: "500" }}>Kayıt Ol</Text>

                        </TouchableOpacity>
                    </View>





                    <View style={{ flex: 94 }}>

                    </View>
                </SafeAreaView>

            </TouchableWithoutFeedback>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 2436,
    },
    viewLogo: {
        flex: 458,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        height: "81%",
        width: "59%"

    },
    greeting: {
        fontSize: 30,

        color: "#A20453",
        textAlign: "center",
        fontFamily: "font1"

    },
    errormessage: {
        flex: 45,
        justifyContent: 'center',
        alignItems: 'center',

    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
        form: {
        flex: 506,

        marginHorizontal: "8%",
    },
    inputTitle: {

        color: "#3B3B3B",
        fontSize: 10,
        textTransform: "uppercase",
        opacity: 0.5
    },
    input: {
        flex: 68,
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 18,
        color: "#161F30",
    },
    passwordReminder: {
        flex:57,
        flexDirection:"row",
        justifyContent:"flex-end",
        opacity: 0.5,
        color: "#3B3B3B",
    },
    button: {
        flexDirection: "row",
        flex: 157,
        borderRadius: 4,
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        alignItems: 'center',


    },
    girisLogoStyle: {
        height: "70%",
        width: "9%",

    },
    facebookButton: {
        flexDirection: "row",
        flex: 157,
        marginHorizontal: "8%",
        paddingHorizontal: "5%",
        backgroundColor: "#3C5A99",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    toSignUp: {
        flex: 57,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "8%"

    }

});
