import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlexedView, Spacer} from '@components/view';
import {Paragraph} from '@components/text/text';
import data from '../../../../data';
import {Image} from 'react-native';
import colors from '@utility/colors';
import {heightPixel} from '@utility/pxToDpConvert';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../../../types';
import {HomeScreenParam} from '@navigation/dashboard/screens';

const Categories = () => {
  const {navigate} = useNavigation<nav<HomeScreenParam>>();
  return (
    <View>
      <FlexedView justifyContent="space-between">
        <Paragraph fontSize={18} fontWeight="700">
          Categories
        </Paragraph>
        <Pressable>
          <Paragraph>See All</Paragraph>
        </Pressable>
      </FlexedView>
      <Spacer />
      <View style={styles.catsV}>
        {data.categories.map((cat, ind) => (
          <Pressable
            key={ind}
            style={styles.catV}
            onPress={() => navigate('ServiceList', {category: cat.name})}>
            <View style={styles.iconV}>
              <Image
                source={cat.icon}
                style={styles.icon}
                resizeMode="contain"
                tintColor={colors.white}
              />
            </View>
            <Paragraph mt={8} numberoflines={1}>
              {cat.name}
            </Paragraph>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  catsV: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconV: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPixel(60),
    width: heightPixel(60),
    borderRadius: heightPixel(70) / 2,
  },
  icon: {
    width: 25,
    height: 25,
  },
  catV: {
    width: 70,
    marginHorizontal: 5,
    marginBottom: 10,
  },
});
