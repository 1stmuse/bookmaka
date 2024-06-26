/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, StyleSheet, useWindowDimensions, Animated} from 'react-native';
import colors from '@utility/colors';

interface Iprops {
  slides: any[];

  scrollX: any;
}

const Dots: React.FC<Iprops> = ({slides, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      {slides?.map((ob, i) => {
        const getWidth = scrollX?.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [5, 20, 5],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={{
              width: getWidth,
              height: 5,
              borderRadius: 5,
              marginRight: 5,
              backgroundColor: colors.white,

              // transform: [{scaleX: getWidth()}],
            }}
            key={i}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'grey',
    marginLeft: 10,
  },
});
export default Dots;
