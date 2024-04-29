import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen, ProfileScreen, QueriesScreen, SearchScreen} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabParamList = {
  HomeScreen: undefined;
  QueriesScreen: undefined;
  SearchScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="QueriesScreen" component={QueriesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
