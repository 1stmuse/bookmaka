/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spacer, ViewContainer} from '@components/view';
import Header from '@components/header';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeScreenParam} from '@navigation/dashboard/screens';
import colors from '@utility/colors';
import ServiceCard from '@shared/ServiceCard';
import {bookmarkService, useSelectServices} from '@store/services';
import {addRemoveBookmark} from '@store/bookmarks';
import {SERVICE} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {Paragraph} from '@components/text/text';

type route = RouteProp<HomeScreenParam, 'ServiceList'>;

const ServiceList = () => {
  const services = useSelector(useSelectServices);

  const {
    params: {category},
  } = useRoute<route>();
  const dispatch = useDispatch();

  const bookmark = (item: SERVICE) => {
    dispatch(bookmarkService({id: item.id, value: !item.isBookMarked}));
    dispatch(addRemoveBookmark({...item, isBookMarked: true}));
  };

  const filteredServices = services?.filter(
    sv => sv.category.toLowerCase() === category.toLowerCase(),
  );

  return (
    <ViewContainer style={styles.container}>
      <Header title={category} />
      <Spacer />
      <FlatList
        data={filteredServices}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ServiceCard
            item={item}
            key={item.id}
            onBookmarkClicked={() => bookmark(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyV}>
            <Paragraph fontSize={16}>No Service for this category</Paragraph>
          </View>
        )}
      />
    </ViewContainer>
  );
};

export default ServiceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  emptyV: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
});
