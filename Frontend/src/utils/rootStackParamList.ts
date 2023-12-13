import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabParamList} from './bottomTabParamList';
import {ProductType} from './productTypes';

export type RootStackParamList = {
  BottomNavigation: BottomTabParamList;
  Cart: undefined;
  ProductDetails: ProductType;
  ProductsList: undefined;
};

export type productDetailsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;
