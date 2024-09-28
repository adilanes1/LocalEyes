// In your main App.js file

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as App from '../../screens/app'; // Create this component
import { routes } from '../../services';

const Stack = createStackNavigator();

function Stacknaiv() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.home}>
        <Stack.Screen name={routes.home} component={App.Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stacknaiv;
