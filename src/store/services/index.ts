import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {SERVICE} from '../../types';
import data from '../../data';

export interface Service {
  services: SERVICE[];
}

const d: SERVICE[] = [...data.services];

const initialState = {
  services: d,
} as Service;

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    initServices(state, {payload}: PayloadAction<Service>) {
      state.services = payload.services;
    },
    bookmarkService(
      state,
      {payload: {id, value}}: PayloadAction<{id: number; value: boolean}>,
    ) {
      const index = state.services.findIndex(book => book.id === id);
      state.services[index].isBookMarked = value;
    },
  },
});

export const {initServices, bookmarkService} = servicesSlice.actions;
export default servicesSlice.reducer;
export const useSelectServices = (
  state: RootState,
): SERVICE[] | null | undefined => state.services.services;
