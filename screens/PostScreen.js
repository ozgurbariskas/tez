import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

export default class PostScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 132 }}>
                    
                </View>


                <View style={[{ flex: 165 },styles.header]}>
                <Text style={{fontSize:30,color:"#3B3B3B"}}>Gönderi Paylaş</Text>
                </View>


                <View style={[{ flex: 200 },]}>

                </View>


                <View style={{ flex: 62 }}>
                    <Text style={{ color: "#620232", }}>Fotoğraf yükle</Text>
                </View>


                <View style={[{ flex: 55 },]}>

                </View>

                <View style={[{ flex: 397 }, styles.avatarLogoView]}>
                    <Image
                        source={require("../assets/PetMatchLogoColor.png")}
                        style={styles.avatarLogo}
                    ></Image>
                    <Ionicons name="md-add" color="#620232" style={{ position: "absolute", bottom: 5, right: 35, fontWeight: "bold" }} size={35}></Ionicons>

                </View>

                <View style={[{ flex: 200 },]}>

                </View>
                <View style={[{ flex: 667 },]}>

                </View>
                <View style={[{ flex: 200 },]}>

                </View>


                <View style={{ flex: 157, width: "83%" }}>

                    <TouchableOpacity onPress={() => alert("tamam")} style={styles.button} >
                        <View style={{
                            flex: 22, justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image
                                source={require("../assets/PetMatchLogoGriLittle.png")}
                                style={styles.buttonLogo}
                            ></Image>
                        </View>
                        <View style={{ flex: 78, marginLeft: "10%" }}>

                            <Text style={{ color: "#3B3B3B", fontWeight: "500", opacity: 0.6 }}>Paylaşmak için tıkla</Text>
                        </View>

                    </TouchableOpacity>
                </View>



                <View style={[{ flex: 200 },]}>

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
        width:"100%",
        
    },

    avatarLogoView: {
        backgroundColor: "rgba(162,4,83,0.1)",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3000,
        height: "100%",
        width: "28%",
    },
    avatarLogo: {
        height: "81%",
        width: "67%",

    },
    button: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 4,
        backgroundColor: "rgba(207,207,207,0.31)",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLogo: {

        height: "70%",
        width: "43%",

    },


});
