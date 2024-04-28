import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootScreenList} from './RootStackSceenList';
import DashboardNavigator from './dashboard';

const {Screen, Navigator} = createNativeStackNavigator<RootScreenList>();

const RootNavigator: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        animation: 'fade',
      }}
      initialRouteName="DashboardNavigator">
      {/* when checking if user has signed in  render splash screen*/}

      <Screen
        name="DashboardNavigator"
        component={DashboardNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
