import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    Header,
    DrawerMenu
} from '../components';

import {
    HeadphoneScreen,
    EarphoneScreen,
    SpeakersScreen
} from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerApp = () => {
    return (

        <Drawer.Navigator
            screenOptions={{
                header: (props) => (<Header {...props} />),
                overlayColor: 1,
                gestureEnabled: false,
                sceneContainerStyle: {
                    backgroundColor: 'white'
                },
                drawerStyle: {
                    width: '100%',
                    top: 90,
                },
            }}
            drawerContent={(props) => (<DrawerMenu {...props} />)}

        >
            <Drawer.Screen name="HeadphoneScreen" options={{ title: 'Headphones' }} component={HeadphoneScreen} />
            <Drawer.Screen name="SpeakersScreen" options={{ title: 'Speakers' }} component={SpeakersScreen} />
            <Drawer.Screen name="EarphoneScreen" options={{ title: 'Earphones' }} component={EarphoneScreen} />
            {/* <Drawer.Screen name="Carrito" component={Carrito} /> */}
        </Drawer.Navigator>
    );
}



