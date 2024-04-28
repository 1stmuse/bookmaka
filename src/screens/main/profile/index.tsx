import React from 'react';
import Header from '@components/header';
import {ViewContainer} from '@components/view';
import {StyleSheet} from 'react-native';
import colors from '@utility/colors';

const Profile = () => {
  return (
    <ViewContainer style={styles.container}>
      <Header title="Profile" />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Profile;
