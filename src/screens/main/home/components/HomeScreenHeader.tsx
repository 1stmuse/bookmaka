/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlexedView} from '@components/view';
import {Image} from 'react-native';
import sharedImages from '@utility/sharedImages';
import {Paragraph} from '@components/text/text';
import {widthPixel} from '@utility/pxToDpConvert';

const HomeScreenHeader = () => {
  return (
    <FlexedView justifyContent="space-between">
      <FlexedView>
        <Image source={sharedImages.profileImg} style={styles.pImage} />
        <View>
          <FlexedView>
            <Paragraph>Good Morning</Paragraph>
            <Image
              source={sharedImages.icons.hand}
              style={[
                styles.icon,
                {
                  width: 25,
                  height: 25,
                },
              ]}
            />
          </FlexedView>
          <Paragraph fontSize={16} fontWeight="600">
            Oluwasegun Muse
          </Paragraph>
        </View>
      </FlexedView>
      <FlexedView>
        <Pressable>
          <Image
            resizeMode="contain"
            source={sharedImages.icons.notification}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={{marginLeft: 10}}>
          <Image
            resizeMode="contain"
            source={sharedImages.icons.bookmark}
            style={[styles.icon]}
          />
        </Pressable>
      </FlexedView>
    </FlexedView>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  pImage: {
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: widthPixel(50),
    marginRight: 10,
  },
  icon: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
});
