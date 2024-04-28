import React from 'react';
import {HomeScreenParam} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '@navigation/bottomTabs';
import {BaseView} from '@components/view';
import ServiceList from '@screens/main/serviceList';

const {Screen: StackScreen, Navigator: StackNav} =
  createStackNavigator<HomeScreenParam>();

const DashboardNavigator = () => {
  return (
    <BaseView>
      <StackNav
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tab">
        <StackScreen component={Tabs} name="Tab" />
        <StackScreen name="ServiceList" component={ServiceList} />
      </StackNav>
    </BaseView>
  );
};

export default DashboardNavigator;
