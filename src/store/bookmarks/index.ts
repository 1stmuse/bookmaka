import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {SERVICE} from '../../types';

export interface Bookmark {
  bookmarks: SERVICE[];
}

const initialState = {
  bookmarks: [],
} as Bookmark;

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addRemoveBookmark(state, {payload}: PayloadAction<SERVICE>) {
      const index = state.bookmarks.findIndex(book => book.id === payload.id);
      if (index < 0) {
        state.bookmarks.push(payload);
      } else {
        state.bookmarks.splice(index, 1);
      }
    },
  },
});

export const {addRemoveBookmark} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
export const useSelectBookmarks = (
  state: RootState,
): SERVICE[] | null | undefined => state.bookmarks.bookmarks;
