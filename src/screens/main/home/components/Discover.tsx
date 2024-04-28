/* eslint-disable react-native/no-inline-styles */
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {FlexedView, Spacer} from '@components/view';
import {Paragraph} from '@components/text/text';
import data from '../../../../data';
import colors from '@utility/colors';
import {useDispatch, useSelector} from 'react-redux';
import {bookmarkService, useSelectServices} from '@store/services';
import {SERVICE} from '../../../../types';
import {addRemoveBookmark} from '@store/bookmarks';
import ServiceCard from '@shared/ServiceCard';

const Discover = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const services = useSelector(useSelectServices);
  const dispatch = useDispatch();

  const bookmark = (item: SERVICE) => {
    dispatch(bookmarkService({id: item.id, value: !item.isBookMarked}));
    dispatch(addRemoveBookmark({...item, isBookMarked: true}));
  };

  const filteredServices = useMemo(() => {
    if (selectedCat === 'all') {
      return services;
    }

    return services?.filter(
      sv => sv.category.toLowerCase() === selectedCat.toLowerCase(),
    );
  }, [selectedCat, services]);

  const selectCategory = (val: string) => setSelectedCat(val.toLowerCase());
  return (
    <View>
      <FlexedView justifyContent="space-between">
        <Paragraph fontSize={18} fontWeight="700">
          Discover & Explore Services
        </Paragraph>
        <Pressable>
          <Paragraph>See All</Paragraph>
        </Pressable>
      </FlexedView>
      <Spacer />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable
          onPress={() => selectCategory('all')}
          style={[
            styles.category,
            {
              backgroundColor:
                selectedCat === 'all' ? colors.black : colors.white,
            },
          ]}>
          <Paragraph
            color={selectedCat === 'all' ? colors.white : colors.black}>
            All
          </Paragraph>
        </Pressable>
        {data.categories.map((ct, ind) => (
          <Pressable
            onPress={() => selectCategory(ct.name)}
            style={[
              styles.category,
              {
                backgroundColor:
                  selectedCat === ct.name.toLowerCase()
                    ? colors.black
                    : colors.white,
              },
            ]}
            key={ind}>
            <Paragraph
              color={
                selectedCat === ct.name.toLowerCase()
                  ? colors.white
                  : colors.black
              }>
              {ct.name}
            </Paragraph>
          </Pressable>
        ))}
      </ScrollView>
      <Spacer height={30} />

      {filteredServices?.length ? (
        filteredServices
          ?.slice(0, 4)
          .map(sv => (
            <ServiceCard
              item={sv}
              key={sv.id}
              onBookmarkClicked={() => bookmark(sv)}
            />
          ))
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Paragraph>No services for selected category</Paragraph>
        </View>
      )}
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  category: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 15,
    marginRight: 10,
  },
});
