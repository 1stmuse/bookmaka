/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomScreenParams} from '@navigation/dashboard/screens';
import HomeScreen from '@screens/main/home';
import Messages from '@screens/main/messages';
import Bookmarks from '@screens/main/bookmarks';

import {NavigationProp, RouteProp} from '@react-navigation/native';
import colors from '@utility/colors';
import CustomTab from './CustomTab';
import sharedImages from '@utility/sharedImages';
import Profile from '@screens/main/profile';

const {Screen, Navigator} = createBottomTabNavigator<BottomScreenParams>();
type ScreenOptions = {
  route: RouteProp<BottomScreenParams>;
  navigation: NavigationProp<BottomScreenParams>;
};

const Tabs = () => {
  const navOption = ({route}: ScreenOptions): BottomTabNavigationOptions => {
    return {
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.black,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => {
        switch (route.name) {
          case 'Home':
            return (
              <CustomTab
                icon={
                  focused
                    ? sharedImages.icons.home_filled
                    : sharedImages.icons.home
                }
                label={route.name}
                focused={focused}
              />
            );
          case 'Bookings':
            return (
              <CustomTab
                icon={
                  focused
                    ? sharedImages.icons.bookings_filled
                    : sharedImages.icons.bookings
                }
                label={route.name}
                focused={focused}
              />
            );
          case 'Messages':
            return (
              <CustomTab
                icon={
                  focused
                    ? sharedImages.icons.messages_filled
                    : sharedImages.icons.messages
                }
                label={route.name}
                focused={focused}
              />
            );
          case 'Profile':
            return (
              <CustomTab
                icon={
                  focused
                    ? sharedImages.icons.profile_filled
                    : sharedImages.icons.profile
                }
                label={route.name}
                focused={focused}
              />
            );
        }
      },
      tabBarStyle: {
        height: 100,
        paddingBottom: 0,
        width: '100%',
      },
    };
  };

  return (
    <Navigator screenOptions={navOption}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Bookings" component={Bookmarks} />
      <Screen name="Messages" component={Messages} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default Tabs;
