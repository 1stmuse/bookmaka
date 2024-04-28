/* eslint-disable react/no-unstable-nested-components */
import React, {useMemo, useState} from 'react';
import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Spacer, ViewContainer} from '@components/view';
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import {useDispatch, useSelector} from 'react-redux';
import {addRemoveBookmark, useSelectBookmarks} from '@store/bookmarks';
import ServiceCard from '@shared/ServiceCard';
import {bookmarkService} from '@store/services';
import {SERVICE} from '../../../types';
import Header from '@components/header';
import data from '../../../data';

const Bookmarks: React.FC = ({}) => {
  const [selectedCat, setSelectedCat] = useState('all');
  const bookmarks = useSelector(useSelectBookmarks);
  const dispatch = useDispatch();
  const removeBookmark = (item: SERVICE) => {
    dispatch(bookmarkService({id: item.id, value: false}));
    dispatch(addRemoveBookmark(item));
  };

  const selectCategory = (val: string) => setSelectedCat(val.toLowerCase());

  const filteredServices = useMemo(() => {
    if (selectedCat === 'all') {
      return bookmarks;
    }

    return bookmarks?.filter(
      sv => sv.category.toLowerCase() === selectedCat.toLowerCase(),
    );
  }, [selectedCat, bookmarks]);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ViewContainer style={{flex: 1}}>
        <Header title="My BookMark" />
        <Spacer height={30} />
        <View>
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
        </View>
        <Spacer />
        <FlatList
          data={filteredServices}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ServiceCard
              item={item}
              key={item.id}
              onBookmarkClicked={() => removeBookmark(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyV}>
              <Paragraph fontSize={16}>No Bookmarks</Paragraph>
            </View>
          )}
        />
      </ViewContainer>
    </View>
  );
};

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
  emptyV: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
});

export default Bookmarks;
