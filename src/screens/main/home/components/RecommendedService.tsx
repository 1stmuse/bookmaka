/* eslint-disable @typescript-eslint/no-unused-vars */
import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlexedView, Spacer} from '@components/view';
import {Paragraph} from '@components/text/text';
import {useDispatch, useSelector} from 'react-redux';
import {bookmarkService, useSelectServices} from '@store/services';
import ServiceCard from '@shared/ServiceCard';
import {SERVICE} from '../../../../types';
import {addRemoveBookmark} from '@store/bookmarks';

const RecommendedService = () => {
  const services = useSelector(useSelectServices);
  const dispatch = useDispatch();

  const bookmark = (item: SERVICE) => {
    dispatch(addRemoveBookmark({...item, isBookMarked: true}));
    dispatch(bookmarkService({id: item.id, value: !item.isBookMarked}));
  };

  return (
    <View>
      <FlexedView justifyContent="space-between">
        <Paragraph fontSize={18} fontWeight="700">
          Recommended services
        </Paragraph>
        <Pressable>
          <Paragraph>See All</Paragraph>
        </Pressable>
      </FlexedView>
      <Spacer />
      {services?.slice(0, 4).map(sv => (
        <ServiceCard
          item={sv}
          key={sv.id}
          onBookmarkClicked={() => bookmark(sv)}
        />
      ))}
    </View>
  );
};

export default RecommendedService;

const styles = StyleSheet.create({});
