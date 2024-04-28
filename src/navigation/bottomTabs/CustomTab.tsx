import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import {Image} from 'react-native';
import {heightPixel} from '@utility/pxToDpConvert';

interface IProps {
  focused: boolean;
  label: string;
  icon: any;
}

const CustomTab = ({label, focused, icon}: IProps) => {
  return (
    <View style={styles.tab}>
      <Image source={icon} style={styles.icon} />
      <Paragraph mt={5} fontWeight={focused ? 'bold' : '400'}>
        {label}
      </Paragraph>

      <View
        style={[
          styles.dot,
          {
            backgroundColor: focused ? colors.primary : undefined,
          },
        ]}
      />
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    // justifyContent: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 2,
  },
  icon: {
    height: heightPixel(30),
  },
});
