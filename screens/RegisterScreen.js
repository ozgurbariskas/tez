import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient'
export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        // headerTitleAlign: 'center',
        headerShown: false
    }



    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {


        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.container}>

                    <View style={{ flex: 280 }}>
                    </View>


                    <View style={{ alignItems: "center", flex: 458 }}>
                        <View style={styles.avatar}>
                            <Image
                                source={require("../assets/PetMatchLogoGri.png")}
                                style={styles.logoStyle}
                            ></Image>
                        </View>
                    </View>

                    <View style={{ flex: 113, marginTop: -20,alignItems:"center"}}>
                        <TouchableOpacity style={{ alignItems: "center" ,width: "8%"}}>
                            <LinearGradient
                                colors={['#620232', '#F92B7F']}
                                start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                                style={{ borderRadius: 4000, alignItems: "center", height: "100%", width: "100%" }}
                            >
                                <Ionicons name="md-add" color="white" size={30}></Ionicons>
                            </LinearGradient>

                        </TouchableOpacity>

                    </View>

                    <View style={styles.errormessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={{ flex: 113 }}>

                    </View>


                    <View style={styles.form}>

                        <View style={{ flex: 190 }}>
                            <Text style={styles.inputTitle}>Tam isim</Text>
                            <TextInput style={styles.input}
                                autoCapitalize="none"
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            >

                            </TextInput>
                        </View>
                        <View style={{ flex: 40 }}>

                        </View>
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

                        <View style={{ flex: 40 }}>

                        </View>

                        <View style={{ flex: 190 }}>
                            <Text style={styles.inputTitle}>Parola tekrar</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password2 => this.setState({ password2 })}
                                value={this.state.password2}
                            >
                            </TextInput>
                        </View>
                    </View>



                    <View style={{ flex: 134 }}>

                    </View>



                    <View style={{ flex: 157 }}>
                        <LinearGradient
                            colors={['#620232', '#F92B7F']}
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                            style={{ marginHorizontal: "8%", height: "100%" }}
                        >
                            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                                <Text style={{ color: "#FFFFFF", fontWeight: "500" }}>Kayıt Ol</Text>
                                <Image
                                    source={require("../assets/PetMatchLogo.png")}
                                    style={styles.girisLogoStyle}
                                ></Image>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={{ flex: 94 }}>

                    </View>


                    <View style={styles.backLogin}>
                        <Text style={{ color: "#414959", fontSize: 13, opacity: 0.5 }}>Zaten hesabın var mı?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>

                            <Text style={{ color: "#A20453", fontWeight: "500" }}>Giriş Yap</Text>

                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 94 }}>

                    </View>

                </View>

            </TouchableWithoutFeedback>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 2436,
    },

    errormessage: {
        flex: 77,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: "8%"
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    form: {
        marginHorizontal: "8%",
        flex: 878
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 18,
        color: "#161F30",
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
    avatar: {
        width: "32%",
        height: "100%",
        borderRadius: 10000,
        backgroundColor: 'rgba(0,0,0,0.07)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoStyle: {
        height: "70%",
        width: "64%",


    },
    backLogin: {
        flex: 57,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "8%"
    }

});
