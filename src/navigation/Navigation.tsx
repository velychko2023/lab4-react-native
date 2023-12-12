import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import News from '../screan/News';

const Drawer = createDrawerNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Chat">
        <Drawer.Screen
          name="LastNews"
          options={{title: 'Новини'}}
          component={News}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
