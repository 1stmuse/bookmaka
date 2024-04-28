import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

export type nav<T extends ParamListBase> = StackNavigationProp<T>;

export enum CATEGORY {
  CLEANING = 'CLEANING',
  REPAIRING = 'REPAIRING',
  PAINTING = 'PAINTING',
  LAUNDRY = 'LAUNDRY',
  APPLIANCE = 'APPLIANCE',
  PLUMBING = 'PLUMBING',
  MOVERS = 'MOVERS',
}

export type SERVICE = {
  provider: string;
  serviceType: string;
  rating: number;
  isBookMarked: boolean;
  number_of_reviews: number;
  id: number;
  category: CATEGORY;
};
