import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import navigators from './navigation/main';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='#2196f3'
        barStyle={{ backgroundColor: 'white' }}
      >
        {navigators.map(({ id, title, screen, icon }) => (
          <Tab.Screen
            key={id}
            name={title}
            component={screen}
            options={{
              tabBarLabel: title,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name={icon} color={color} size={26} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
