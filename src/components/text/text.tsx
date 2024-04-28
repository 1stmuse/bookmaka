import React from 'react';
import {Text, TextStyle} from 'react-native';
import {fontPixel} from '@utility/pxToDpConvert';
import {PropsWithChildren} from 'react';
import colors from '@utility/colors';

interface TextProp extends PropsWithChildren {
  style?: TextStyle;
  color?: string;
  textAlign?: TextStyle['textAlign'];
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
  fontWeight?: TextStyle['fontWeight'];
  mt?: TextStyle['marginTop'];
  mr?: TextStyle['marginRight'];
  numberoflines?: number;
}

export const Paragraph = ({
  children,
  color = colors.black,
  fontSize = fontPixel(15),
  lineHeight,
  fontWeight,
  mr = fontPixel(5),
  mt,
  textAlign = 'left',
  numberoflines,
  style,
}: TextProp) => {
  return (
    <Text
      style={[
        {
          color,
          fontSize,
          lineHeight,
          fontWeight,
          marginTop: mt,
          marginRight: mr,
          textAlign: textAlign,
        },
        style,
      ]}
      numberOfLines={numberoflines}>
      {children}
    </Text>
  );
};
