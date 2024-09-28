import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import BottomTabNavigation from './darwer'; // Import the Bottom Tab Navigation component
import { Wrapper, Text, GradientText } from '../../components';
import { Image } from '@rneui/base';
import { appIcons, routes } from '../../services';
import { height, width } from 'react-native-dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from '../../components/spacer';
import { useNavigation } from '@react-navigation/native';
import * as App from '../../screens/app';
import { createStackNavigator } from '@react-navigation/stack';

import localAuth from './local';
import LocalAuth from './local';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerDesign = () => {
    const navigation = useNavigation();
    return (
        <Wrapper isMain>
            <Wrapper style={{ top: height(8), marginHorizontal: width(2) }} alignItemsCenter>
                {/* Add your custom drawer design elements here */}
                <Image source={appIcons.fullogo} style={{ height: height(13), width: width(55) }} resizeMode='contain' />
            </Wrapper>
            <Spacer height={height(13)} />
            <Wrapper style={{ height: height(95) }}>
                <TouchableOpacity onPress={() => navigation.navigate(routes.home)}>
                    <Wrapper style={{ left: width(2) }}>
                        <Image source={appIcons.houseFul} style={{ height: height(8), width: width(30) }} resizeMode='contain' tintColor={'#000000'} />
                    </Wrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.help)}>
                    <Wrapper style={{ left: width(1.5) }}>
                        <Image source={appIcons.helpcenter} style={{ height: height(8), width: width(45) }} resizeMode='contain' tintColor={'#000000'} />
                    </Wrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.term)}>
                    <Wrapper style={{ left: width(3.5) }}>
                        <Image source={appIcons.termandcondition} style={{ height: height(8), width: width(55) }} resizeMode='contain' tintColor={'#000000'} />
                    </Wrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.policy)}>
                    <Wrapper style={{ left: width(3.5) }}>
                        <Image source={appIcons.privacy} style={{ height: height(8), width: width(45) }} resizeMode='contain' tintColor={'#000000'} />
                    </Wrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.aboutus)}>
                    <Wrapper style={{ left: width(4) }}>
                        <Image source={appIcons.aboutus} style={{ height: height(8), width: width(35) }} resizeMode='contain' tintColor={'#000000'} />
                    </Wrapper>
                </TouchableOpacity>
                <Spacer height={height(13)} />
                <Text style={{ left: width(1) }}>____________________________________</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
                    <Image source={appIcons.logoutt} style={{ height: height(9), width: width(35), left: width(15), top: height(1.5) }} resizeMode='contain' />
                </TouchableOpacity>
            </Wrapper>
        </Wrapper>
    );
};

const stackforlocal = () => {
    return (
        <Stack.Navigator initialRouteName={routes.localAuth}>
            <Stack.Screen name={routes.localAuth} component={LocalAuth} options={{ headerShown: false }} />
            <Stack.Screen name={routes.weeklyplan} component={App.Weeklyplan} options={{ headerShown: false }} />
        
        </Stack.Navigator>
    );
};

const DrawerNavigation = () => {
    const [initialRoute, setInitialRoute] = useState(null); // Use state for initial route

    // Retrieve the key from AsyncStorage when the component mounts
    useEffect(() => {
        const getInitialRoute = async () => {
            try {
                const key = await AsyncStorage.getItem('key'); // Get the stored key
                if (key === 'local') {
                    setInitialRoute('LocalHome'); // Set to 'LocalHome' if key is 'local'
                } else {
                    setInitialRoute('Home'); // Set to 'Home' for any other value
                }
            } catch (error) {
                console.error('Error fetching key from AsyncStorage:', error);
            }
        };

        getInitialRoute();
    }, []);

    // Show a loading screen or null while the initial route is being determined
    if (!initialRoute) {
        return null; // Alternatively, you can render a loading component here
    }

    return (
        <Drawer.Navigator
            initialRouteName={initialRoute} // Conditionally set the initial route
            drawerContent={(props) => <DrawerDesign {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#FFFFFF',
                    width: 240,
                    borderTopRightRadius: 35,
                    borderBottomRightRadius: 35,
                    overflow: 'hidden',
                },
                drawerLabelStyle: {
                    fontSize: 16,
                },
                headerStyle: {
                    // Set header style globally for all screens if needed
                },
                headerTintColor: 'black', // Default text color for headers
            }}
        >
            <Drawer.Screen
                name="LocalHome"
                component={stackforlocal}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigation}
                options={{ headerShown: false }}
            />
            <Drawer.Screen name={routes.help} component={App.Help} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.term} component={App.Termcondition} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.policy} component={App.Policy} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.aboutus} component={App.AboutUs} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.gudlines} component={App.Gudlines} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.contactsupport} component={App.Contact} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.faq} component={App.Faq} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.filter} component={App.Filter} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.trip} component={App.TripDetail} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.schedule} component={App.Schedule} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.viewprofile} component={App.ViewProfile} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.conformbook} component={App.ConformBooking} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.conform} component={App.Conform} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.pay} component={App.Pay} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.addcard} component={App.AddCard} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.yourPreference} component={App.YourPreference} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.matchResult} component={App.MatchingResult} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.sort} component={App.Sort} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.editprfile} component={App.EditProfile} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.changepassword} component={App.ChangePassword} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.paymentmethod} component={App.PaymentMethod} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.chat} component={App.Chat} options={{ headerShown: false }} />
            <Drawer.Screen name={routes.sreach} component={App.Sreach} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
