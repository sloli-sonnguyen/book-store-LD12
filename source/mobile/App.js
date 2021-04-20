import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import navigators from './navigation/main';
import store from './redux/store';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#2196f3"
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
                  <MaterialIcons name={icon} color={color} size={26} />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
