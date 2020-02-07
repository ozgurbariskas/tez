import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase'
import { Ionicons } from "@expo/vector-icons"



export default class SettingScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    };

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <View style={{ flex: 132 }}>

                </View>


                <View style={[{ flex: 165 }, styles.header]}>
                    <Text style={{ fontSize: 30, color: "#3B3B3B", fontWeight: "bold" }}>Ayarlar</Text>
                </View>


                <View style={[{ flex: 157 }, styles.baslik]}>
                    <Text style={{ color: "#3B3B3B", fontWeight: "bold", fontSize: 17 }}>Hesap</Text>
                </View>


                <View style={[{ flex: 178 }, styles.altBaslik]}>
                    <Text style={{ fontSize: 17 }}>Profili Düzenle</Text>
                    <Ionicons name="ios-arrow-forward" size={25} style={{ opacity: 0.6 }} ></Ionicons>
                </View>


                <View style={[{ flex: 178 }, styles.altBaslik]}>
                    <Text style={{ fontSize: 17 }}>Parola Değiştir</Text>
                    <Ionicons name="ios-arrow-forward" size={25} style={{ opacity: 0.6 }} ></Ionicons>
                </View>


                    <TouchableOpacity onPress={this.signOutUser} style={[{ flex: 178 }, styles.altBaslik]}>

                        <Text style={{ fontSize: 17 }}>Çıkış Yap</Text>
                        <Ionicons name="ios-arrow-forward" size={25} style={{ opacity: 0.6 }} ></Ionicons>

                    </TouchableOpacity>
             

                <View style={[{ flex: 157 }, styles.baslik]}>
                    <Text style={{ color: "#3B3B3B", fontWeight: "bold", fontSize: 17 }}>Diğer</Text>
                </View>


                <View style={[{ flex: 178 }, styles.altBaslik]}>
                    <Text style={{ fontSize: 17 }}>Gizlilik Politikası</Text>
                    <Ionicons name="ios-arrow-forward" size={25} style={{ opacity: 0.6 }} ></Ionicons>
                </View>


                <View style={[{ flex: 178 }, styles.altBaslik]}>
                    <Text style={{ fontSize: 17 }}>Bize Ulaş</Text>
                    <Ionicons name="ios-arrow-forward" size={25} style={{ opacity: 0.6 }} ></Ionicons>
                </View>


                <View style={[{ flex: 178 }, styles.altBaslik]}>
                    <Text style={{ fontSize: 17 }}>Uygulama Hakkında</Text>
                    <Ionicons name="ios-arrow-forward" size={25} style={{ opacity: 0.6 }} ></Ionicons>
                </View>
                <View style={[{ flex: 370 },]}>

                </View>

            </View>


        );
    };


};



const styles = StyleSheet.create({
    container: {
        flex: 2436,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#CECECE8F",
        width: "100%",

    },
    baslik: {
        flexDirection: "row",
        backgroundColor: "#cfcfcf",
        width: "100%",
        alignItems: "center",
        paddingLeft: "5%",
    },
    altBaslik: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: "5%",
        justifyContent: "space-between"
    },
});


{/* <Text>Hi! {this.state.displayName}!</Text>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={()=>this.props.navigation.navigate("BizeUlas")}>
                    <Text>Ulas!</Text>
                </TouchableOpacity> */}