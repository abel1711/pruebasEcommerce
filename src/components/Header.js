import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Header = ({ navigation, options }) => {
    console.log(JSON.stringify(options, null, 4))
    return (
        <View
            style={styles.headerContainer}>
            <View
                style={ styles.header }
            >

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon name='menu-outline' size={40} color='white' />
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.headerText}
                >AudioCommerce</Text>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Carrito')}
                    >
                        <Icon name='cart-outline' size={40} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={ styles.headerText}>{options.title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#101010',
        // height: 90,
        alignItems: 'center',
        // flexDirection: 'row',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        paddingTop: 8,
        fontWeight: '300'
    }
})