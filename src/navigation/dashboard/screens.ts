import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeScreenParam = {
  Tab: NavigatorScreenParams<BottomScreenParams>;
  ServiceList: {category: string};
};

export type BottomScreenParams = {
  Home: undefined;
  Bookings: undefined;
  Messages: undefined;
  Profile: undefined;
};
