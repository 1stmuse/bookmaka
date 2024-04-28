/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import colors from '@utility/colors';
import HomeScreenHeader from './components/HomeScreenHeader';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {AppTextInput} from '@components/TextInput';
import {Image, ScrollView, View} from 'react-native';
import sharedImages from '@utility/sharedImages';
import {StyleSheet} from 'react-native';
import {widthPixel} from '@utility/pxToDpConvert';
import SpecialOffers from './components/SpecialOffers';
import Categories from './components/Categories';
import RecommendedService from './components/RecommendedService';
import Discover from './components/Discover';

const HomeScreen: React.FC = ({}) => {
  return (
    <ViewContainer
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <HomeScreenHeader />
        <Spacer height={30} />
        <AppTextInput
          placeholder="Search..."
          isSearch
          rightIcon={<Image source={sharedImages.icons.filter} />}
        />
        <FlexedView>
          <AppTextInput
            leftIcon={<Image source={sharedImages.icons.location_pin} />}
            value="267 New AVenue Park.Indore In..."
            inputStyle={{
              flex: 4,
              borderWidth: 1,
              borderColor: colors.border_light,
            }}
            containerStyle={{
              flex: 3,
              marginBottom: 0,
            }}
          />
          <View style={styles.compassV}>
            <Image source={sharedImages.icons.compass} />
          </View>
        </FlexedView>
        <Spacer height={40} />
        <SpecialOffers />
        <Spacer height={30} />
        <Categories />
        <Spacer height={30} />
        <RecommendedService />
        <Spacer height={30} />
        <Discover />
      </ScrollView>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  compassV: {
    width: widthPixel(65),
    height: widthPixel(65),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.border,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: colors.border_light,
  },
});

export default HomeScreen;
