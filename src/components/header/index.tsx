import {Paragraph} from '@components/text/text';
import {FlexedView} from '@components/view';
import {widthPixel} from '@utility/pxToDpConvert';
import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {nav} from '../../types/index';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import colors from '@utility/colors';
import sharedImages from '@utility/sharedImages';

interface Props {
  title?: string;
  rightIcon?: ReactNode;
}

const Header = ({title, rightIcon}: Props) => {
  const {goBack} = useNavigation<nav<HomeScreenParam>>();
  return (
    <View style={[styles.container]}>
      <FlexedView justifyContent="space-between">
        <Pressable style={styles.leftIconV} onPress={goBack}>
          <Image
            style={styles.backIcon}
            source={sharedImages.icons.back_arrow}
          />
        </Pressable>
        {title ? (
          <Paragraph fontSize={16} lineHeight={21} fontWeight="500">
            {title}
          </Paragraph>
        ) : null}
        {rightIcon ? (
          rightIcon
        ) : (
          <Pressable style={styles.rightIconV}>
            <Image
              style={styles.backIcon}
              source={sharedImages.icons.circle_info}
            />
          </Pressable>
        )}
      </FlexedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
  leftIconV: {
    width: widthPixel(45),
    height: widthPixel(45),
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  rightIconV: {
    width: widthPixel(45),
    height: widthPixel(45),
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
