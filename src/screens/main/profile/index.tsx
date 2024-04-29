import React from 'react';
import Header from '@components/header';
import {FlexedView, Spacer, ViewContainer} from '@components/view';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '@utility/colors';
import sharedImages from '@utility/sharedImages';
import {Paragraph} from '@components/text/text';
import {heightPixel} from '@utility/pxToDpConvert';

const Profile = () => {
  return (
    <ViewContainer style={styles.container}>
      <Header title="Profile" />
      <Spacer />
      <ScrollView>
        <View style={styles.initials}>
          <Paragraph fontWeight="600" color={colors.white} fontSize={30}>
            OA
          </Paragraph>
        </View>
        {settingsData.map(st => (
          <TouchableOpacity key={st.id}>
            <FlexedView
              justifyContent="space-between"
              style={{paddingVertical: 8, marginBottom: 20}}>
              <FlexedView>
                <View style={{marginRight: 15}}>
                  <Image
                    tintColor={colors.primary}
                    source={st.icon}
                    style={{height: 24, width: 24}}
                  />
                </View>
                <Paragraph fontSize={16}>{st.title}</Paragraph>
              </FlexedView>
              {/* <Entypo name="chevron-small-right" size={27} /> */}
            </FlexedView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  initials: {
    height: heightPixel(100),
    width: heightPixel(100),
    borderRadius: heightPixel(50),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Profile;

const settingsData: {
  id: number;
  title: string;
  icon: ImageSourcePropType;
}[] = [
  {
    id: 0,
    title: 'Profile',
    icon: sharedImages.icons.user,
  },
  {
    id: 1,
    title: 'Security',
    icon: sharedImages.icons.security,
  },
  {
    id: 5,
    title: 'Terms of use',
    icon: sharedImages.icons.document,
  },
  {
    id: 6,
    title: 'Privacy policy',
    icon: sharedImages.icons.privacy,
  },
  {
    id: 7,
    title: 'Support',
    icon: sharedImages.icons.support,
  },
];
