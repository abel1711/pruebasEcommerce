import React from 'react'
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

export const DrawerMenu = ({ descriptors, navigation, state }) => {

    return (
        <DrawerContentScrollView style={{ width: '100%' }}>
            {
                state.routes.map(({ key, name }) => {

                    let iconUrl;

                    switch (name) {
                        case 'HeadphoneScreen':
                            iconUrl = require('../assets/img/menu-headphone.png');
                            break;
                        case 'SpeakersScreen':
                            iconUrl = require('../assets/img/menu-speakers.png');
                            break;
                        case 'EarphoneScreen':
                            iconUrl = require('../assets/img/menu-earphones.png');
                            break;

                        default:
                            iconUrl = require('../assets/img/earphone1.png')
                            break;
                    }

                    return (
                        <View key={key} style={{ alignItems: 'center', marginTop: 85 }}>

                            <Image source={iconUrl}
                                style={{
                                    width: 130,
                                    height: 130,
                                    resizeMode: 'contain',
                                    top: -60,
                                    position: 'absolute',
                                    zIndex: 1,
                                }}
                            />
                            <Image 
                                source={require('../assets/img/sombra.png')}
                                style={{
                                    // backgroundColor:'red',
                                    width: 220,
                                    resizeMode: 'contain',
                                    position:'absolute',
                                    zIndex: 1,
                                    top: -20,
                                }}
                                />
                            <TouchableOpacity
                                onPress={() => { navigation.navigate(name) }}
                                style={{
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: 10,
                                    height: 200,
                                    width: 455,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <View style={{
                                    // backgroundColor: 'red', 
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    bottom: 0,
                                    height: 130

                                }}>
                                    <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', color: '#000', fontSize: 20 }}>{descriptors[key].options.title}</Text>
                                    <Text style={{ fontSize: 15, justifyContent: 'space-between' }}>
                                        SHOP
                                        <Icon name='chevron-forward-outline' size={16} color='#d87d4a' />
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    DrawerButton: {

    }
})
