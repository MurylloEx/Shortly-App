import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import MyUrls from '../pages/MyUrls';

const Tab = createBottomTabNavigator();

export interface AppProps { }

const BottomAppNavigator: FunctionComponent<AppProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar novo link',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="MyUrls"
        component={MyUrls}
        options={{
          title: 'Meus links encurtados',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Feather name="share-2" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomAppNavigator;