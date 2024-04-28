/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SERVICE} from '../types';
import {Divider, FlexedView} from '@components/view';
import {Paragraph} from '@components/text/text';
import {NAIRA} from '@utility/naira';
import sharedImages from '@utility/sharedImages';
import colors from '@utility/colors';
import {widthPixel} from '@utility/pxToDpConvert';

interface IProps {
  item: SERVICE;
  onBookmarkClicked: () => void;
}

const ServiceCard = ({item, onBookmarkClicked}: IProps) => {
  return (
    <Pressable style={styles.card}>
      <FlexedView
        style={{alignItems: 'flex-start'}}
        justifyContent="space-between">
        <FlexedView style={{alignItems: 'flex-start'}}>
          <Image style={styles.image} source={sharedImages.service_man} />
          <View>
            <Paragraph mt={5}>{item.provider}</Paragraph>
            <Paragraph mt={10} fontSize={17} fontWeight="600">
              {item.category}
            </Paragraph>
            <Paragraph
              fontSize={17}
              fontWeight="500"
              mt={5}>{`${NAIRA} ${item.number_of_reviews}`}</Paragraph>
            <FlexedView style={{marginTop: 5}}>
              <Image source={sharedImages.icons.star} />
              <Paragraph
                style={{
                  marginHorizontal: 5,
                }}>
                {item.rating}
              </Paragraph>
              <Divider height={15} width={1} bg={colors.black} />
              <Paragraph
                style={{
                  marginLeft: 5,
                }}>{`${item.number_of_reviews.toLocaleString()} reviews`}</Paragraph>
            </FlexedView>
          </View>
        </FlexedView>
        <TouchableOpacity onPress={onBookmarkClicked}>
          <Image
            style={{width: 25, height: 25}}
            source={sharedImages.icons.bookmark}
            tintColor={item.isBookMarked ? colors.black : undefined}
          />
        </TouchableOpacity>
      </FlexedView>
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 15,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: widthPixel(120),
    height: widthPixel(120),
    borderRadius: 10,
    marginRight: 15,
  },
});
