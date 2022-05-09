import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './TelaLogin'
import Dashboard from './Dashboard'
import got from './got/got'
import Season1 from './got/season1'

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer initialRouteName="TelaLogin">
          <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={TelaLogin}
            options={{title: 'Login',
            headerStyle: {
              backgroundColor: 'black',
              
            },
            headerTitleStyle: {
              color: 'white'}}}/>
            <Stack.Screen name="Dashboard"component={Dashboard} />
            <Stack.Screen name='got' component={got}/>
            <Stack.Screen name='Season1' component={Season1}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default Routes