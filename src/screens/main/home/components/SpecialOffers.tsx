/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {FlexedView, Spacer} from '@components/view';
import {Paragraph} from '@components/text/text';
import sharedImages from '@utility/sharedImages';
import {Image} from 'react-native';
import {heightPixel} from '@utility/pxToDpConvert';
import Dots from './Dots';

const data = [
  sharedImages.specialOffer,
  sharedImages.deal2,
  sharedImages.specialOffer,
];

const SpecialOffers = () => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = React.useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      const newIndex = info.viewableItems[0].index;
      setCurrentIndex(newIndex as number);
    },
  ).current;
  return (
    <View>
      <FlexedView justifyContent="space-between">
        <Paragraph fontSize={18} fontWeight="700">
          Special Offers
        </Paragraph>
        <Pressable>
          <Paragraph>See All</Paragraph>
        </Pressable>
      </FlexedView>
      <Spacer />
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={[
                styles.card,
                {
                  width: width - 40,
                },
              ]}>
              <Image
                source={item}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          onViewableItemsChanged={onViewableItemsChanged}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          pagingEnabled
        />
        <View style={styles.dotV}>
          <Dots slides={data} scrollX={scrollX} />
        </View>
      </View>
    </View>
  );
};

export default SpecialOffers;

const styles = StyleSheet.create({
  card: {
    height: heightPixel(200),
    marginRight: 10,
  },
  dotV: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    left: 0,
  },
});
