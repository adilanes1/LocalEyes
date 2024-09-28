/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as Auth from '../../screens/auth';
import app from '../../config/firebase';
import * as App from '../../screens/app'
import localAuth from '../app/local';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
            initialRouteName={routes.onbording}
        >
            <AuthStack.Screen name={routes.onbording} component={Auth.OnBording} />
            <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
            <AuthStack.Screen name={routes.creat} component={App.Profile} />
            <AuthStack.Screen name={routes.add} component={App.Add} />
            <AuthStack.Screen name={routes.forget} component={Auth.ForgetPassword} />
             <AuthStack.Screen name={routes.createAccount} component={Auth.CreateAccount} /> 
             <AuthStack.Screen name={routes.localsignin} component={Auth.LocalSignin} />
             <AuthStack.Screen name={routes.localCreate} component={Auth.LocalCreat} />
             <AuthStack.Screen name={routes.localProfile} component={Auth.LocalProfile} />
             <AuthStack.Screen name={routes.localcomplete} component={Auth.LocalComplete} />
             <AuthStack.Screen name={routes.localmap} component={Auth.Localmap} />
             <AuthStack.Screen name={routes.nextComplete} component={Auth.nextComplele} />
             <AuthStack.Screen name={routes.mappin} component={Auth.MapPin} />
          
             
             {/* <AuthStack.Screen name={routes.weeklyplan} component={app.weeklyplan} /> */}
           
        </AuthStack.Navigator>
    )
}

export default AuthNavigation