import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BizeUlasScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Bize ukklas</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
