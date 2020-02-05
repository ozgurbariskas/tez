import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
export default class PasswordForgetScreen extends React.Component {
    static navigationOptions = {
        // headerTitleAlign: 'center',
        title: ""
    }

    state = {
        email: "",
        keyboardControl: false
    }


    UNSAFE_componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { this.setState({ keyboardControl: true }) });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboardControl: false }));
    }

    componentWillUnmount() {

        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }



    render() {

        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.container}>
                    <View style={{ flex: 456 }}>
                        {this.state.keyboardControl ?
                            <View style={{ flex:1 }}>

                                <View style={{ flex: 190, marginHorizontal: "8%" }}>

                                    <Text style={styles.inputTitle}>Email</Text>
                                    <TextInput style={styles.input}
                                        autoCapitalize="none"
                                        onChangeText={email => this.setState({ email })}
                                        value={this.state.email}
                                    />



                                </View>

                                <View style={{ flex: 89 }}>

                                </View>


                                <View style={{ flex: 157 }}>
                                    <LinearGradient
                                        colors={['#620232', '#F92B7F']}
                                        start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                                        style={{ marginHorizontal: "8%", height: "100%", justifyContent: "center" }}
                                    >
                                        <TouchableOpacity style={styles.button} onPress={() => { alert("tamam") }}>
                                            <Text style={{ color: "#FFFFFF", fontWeight: "500", fontSize: 16 }}>Gönder</Text>

                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </View> : null}


                    </View>

                    <View style={{ flex: 447 }}>
                        <Image
                            source={require("../assets/pasForget.png")}
                            style={styles.pasForgetLogo}
                        ></Image>
                    </View>

                    <View style={{ flex: 131 }}>

                    </View>


                    <View style={styles.pasForgotText}>
                        <Text
                            style={{ fontSize: 28, fontWeight: "bold", color: "#3B3B3B" }}
                        >Parolanızı mı unuttunuz?</Text>
                    </View>

                    <View style={{ flex: 39 }}>

                    </View>
                    <View style={{
                        flex: 168,
                        alignItems: 'center', marginHorizontal: "17.46%"
                    }}>
                        <Text style={{ color: "#3B3B3B", textAlign: "center" }}>Lütfen kayıtlı olan mail adresini gir.
                        Parolanı sıfırlaman için sana yeni bir bağlantı linki göndereceğiz.</Text>

                    </View>

                    <View style={{ flex: 552 }}>

                    </View>

                    <View style={{ flex: 190, marginHorizontal: "8%" }}>

                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />



                    </View>

                    <View style={{ flex: 89 }}>

                    </View>


                    <View style={{ flex: 157 }}>
                        <LinearGradient
                            colors={['#620232', '#F92B7F']}
                            start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                            style={{ marginHorizontal: "8%", height: "100%", justifyContent: "center" }}
                        >
                            <TouchableOpacity style={styles.button} onPress={() => { alert("tamam") }}>
                                <Text style={{ color: "#FFFFFF", fontWeight: "500", fontSize: 16 }}>Gönder</Text>

                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={{ flex: 110 }}>

                    </View>

                </View>
            </TouchableWithoutFeedback>

        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 2436,
        backgroundColor: "white"
    },
    pasForgetLogo: {
        height: "100%",
        resizeMode: 'contain',
        marginHorizontal: "18%"


    },
    pasForgotText: {
        flex: 97,
        fontSize: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputTitle: {

        color: "#3B3B3B",
        fontSize: 10,
        textTransform: "uppercase",
        opacity: 0.5
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 18,
        color: "#161F30",
    },
    button: {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',


    },

});
