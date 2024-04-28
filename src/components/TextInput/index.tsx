/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ReactElement, useState} from 'react';
import {
  Text,
  TextInputProps,
  View,
  TextInput,
  StyleSheet,
  Platform,
  ViewStyle,
} from 'react-native';
import colors from '../../utility/colors';
import {heightPixel, widthPixel} from '../../utility/pxToDpConvert';
import {Image} from 'react-native';
import sharedImages from '@utility/sharedImages';

interface IProps extends TextInputProps {
  label?: string;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  multiline?: boolean;
  isSearch?: boolean;
}

export const AppTextInput = ({
  label,
  rightIcon,
  leftIcon,
  containerStyle,
  inputStyle,
  multiline = false,
  isSearch = false,
  ...props
}: IProps) => {
  const [height, setHeight] = useState(0);
  return (
    <View style={[styles.body, {...containerStyle}]}>
      {label && (
        <View>
          <Text>{label}</Text>
        </View>
      )}
      <View
        style={[
          styles.inputContaner,
          {...inputStyle},
          {
            height: Math.max(multiline ? 100 : 50, height),
            marginTop: multiline ? 10 : 0,
          },
        ]}>
        {isSearch ? (
          <Image source={sharedImages.icons.search} />
        ) : (
          leftIcon && leftIcon
        )}
        <TextInput
          multiline={multiline}
          onContentSizeChange={event => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
          style={[styles.input]}
          {...props}
          placeholderTextColor={colors.primary}
        />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    marginBottom: heightPixel(20),
  },
  inputContaner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: widthPixel(15),
    paddingVertical: Platform.select({
      ios: heightPixel(8),
      android: 0,
    }),
  },
  input: {
    paddingHorizontal: widthPixel(15),
    flex: 1,
    height: '100%',
  },
});
