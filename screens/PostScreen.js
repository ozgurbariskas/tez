import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';


export default class PostScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[{ flex: 132 },]}>

                </View>
                <View style={[{ flex: 148 },]}>

                </View>
                <View style={[{ flex: 327 },]}>

                </View>


                <View style={{ flex: 62 }}>
                    <Text style={{ color: "#620232", }}>Fotoğraf yükle</Text>
                </View>


                <View style={[{ flex: 55 },]}>

                </View>

                <View style={[{ flex: 397 }, styles.logo]}>


                </View>

                <View style={[{ flex: 200 },]}>

                </View>
                <View style={[{ flex: 457 },]}>

                </View>
                <View style={[{ flex: 200 },]}>

                </View>


                <View style={{ flex: 157, width: "83%" }}>

                    <TouchableOpacity onPress={() => alert("tamam")} style={styles.button} >
                        <View style={{ flex: 22,justifyContent:'center',
                        alignItems:'center', }}>
                            <Image
                                source={require("../assets/PetMatchLogoGriLittle.png")}
                                style={styles.buttonLogoStyle}
                            ></Image>
                        </View>
                        <View style={{ flex: 78 ,marginLeft:"10%"}}>

                            <Text style={{ color: "#3B3B3B", fontWeight: "500", opacity: 0.6 }}>Paylaşmak için tıkla</Text>
                        </View>
                       



                    </TouchableOpacity>


                </View>


                <View style={[{ flex: 300 },]}>

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


    logo: {
        backgroundColor: "#A20453",
        opacity: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30000,
        height: "100%",
        width: "28%",


    },
    button: {
        flex: 1,
        
        flexDirection: "row",
        borderRadius: 4,
        backgroundColor: "rgba(207,207,207,0.31)",
        height: "100%",
        justifyContent:'center',
        alignItems:'center',
    },

    buttonLogoStyle: {

        height: "70%",
        width: "36%",



    },


});
