import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, TouchableOpacity } from 'react-native';
import * as App from '../../screens/app'; // Ensure these are correctly exported
import { appIcons, routes } from '../../services';
import { width, height } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const BottomTabStack = createBottomTabNavigator();

const TabIcon = ({ source, size, focused }) => {
    const color = focused ? '#B84B62' : '#4F4F4F';

    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={source} style={{ width: size, height: size, tintColor: color }} />
            {focused && (
                <View
                    style={{
                        width: size / 5,
                        height: size / 5,
                        borderRadius: size / 4,
                        backgroundColor: '#B84B62',
                        position: 'absolute',
                        bottom: -15, 
                        shadowColor: '#B84B62',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.7,
                        shadowRadius: 4,
                    }}
                />
            )}
        </View>
    );
};

const LocalAuth = () => {
    const tabIconSize = 25;
    const navigation = useNavigation(); // Access navigation to toggle the drawer

    const images = {
        home: require('../../assets/images/House.png'),
        community: require('../../assets/images/calendar(1).png'),
        shop: require('../../assets/images/chat.png'),
        account: require('../../assets/images/profile.png'),
    };

    return (
        <BottomTabStack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderTopWidth: 0, 
                    elevation: 0,
                    shadowColor:'#00000017',
                    height: 60,
                    borderTopLeftRadius: 30, 
                    borderTopRightRadius: 30, 
                    overflow: 'hidden', 
                },
                tabBarIcon: ({ focused }) => {
                    let source;
                    if (route.name === routes.localhome) {
                        source = images.home;
                    } else if (route.name === routes.avaliablity) {
                        source = images.community;
                    } else if (route.name === routes.shop) {
                        source = images.shop;
                    } else if (route.name === routes.account) {
                        source = images.account;
                    }

                    return (
                        <TabIcon
                            source={source}
                            size={tabIconSize}
                            focused={focused}
                        />
                    );
                },
                tabBarActiveTintColor: '#B84B62',
                tabBarInactiveTintColor: '#4F4F4F',
            })}
        >
            <BottomTabStack.Screen
                name={routes.localhome}
                component={App.LocalHome}
                options={{
                     tabBarLabel: '',
                    headerShown: true,
                    headerStyle: {
                        top: height(4),
                        shadowColor: 'transparent', 
                        shadowOffset: { width: 0, height: 0 }, 
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        elevation: 0, 
                        borderBottomWidth: 0,
                    },
                    headerTintColor: '#101010',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 16,
                        left: width(24),
                    },
                    headerTitle: 'Home',
                    headerLeft: () => ( // Add drawer icon here
                        <TouchableOpacity
                            style={{ marginLeft: width(5) }}
                            onPress={() => navigation.toggleDrawer()} // Toggle the drawer
                        >
                            <Image
                                source={appIcons.drawer} // Replace with your drawer icon
                                style={{ width: width(7), height: height(7) }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: width(7) }}>
                            <Image source={appIcons.bellhelf} style={{ width: width(7), height: height(7) }} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.avaliablity}
                component={App.Avaliabilty}
                options={{
                     tabBarLabel: '',
                    headerShown: true,
                    headerStyle: {
                        top: height(4),
                        shadowColor: 'transparent', 
                        shadowOffset: { width: 0, height: 0 }, 
                        shadowOpacity: 0,
                        shadowRadius: 0,
                        elevation: 0, 
                        borderBottomWidth: 0,
                    },
                    headerTintColor: '#101010',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 16,
                        left: width(14),
                    },
                    headerTitle: 'Availability & Rate',
                    headerLeft: () => ( // Add drawer icon here
                        <TouchableOpacity
                            style={{ marginLeft: width(5) }}
                            onPress={() => navigation.toggleDrawer()} // Toggle the drawer
                        >
                            <Image
                                source={appIcons.drawer} // Replace with your drawer icon
                                style={{ width: width(7), height: height(7) }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: width(7) }}>
                            <Image source={appIcons.bellhelf} style={{ width: width(7), height: height(7) }} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.shop}
                component={App.Shop}
                options={{ tabBarLabel: '', headerShown: false }}
            />
            <BottomTabStack.Screen
                name={routes.account}
                component={App.Account}
                options={{ tabBarLabel: '', headerShown: false }}
            />
        </BottomTabStack.Navigator>
    );
};

export default LocalAuth;
