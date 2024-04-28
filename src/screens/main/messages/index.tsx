import React from 'react';
import {Spacer, ViewContainer} from '@components/view';
import Header from '@components/header';
import {StyleSheet, View} from 'react-native';
import colors from '@utility/colors';
import {Paragraph} from '@components/text/text';

const Messages: React.FC = ({}) => {
  return (
    <ViewContainer style={styles.container}>
      <Header title="My Messages" />
      <View>
        <Spacer height={50} />
        <Paragraph textAlign="center">You have no messages </Paragraph>
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Messages;
