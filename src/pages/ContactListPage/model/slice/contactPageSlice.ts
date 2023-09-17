import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ContactPageSchema } from '../types/contactPageSchema'
import { fetchContactList } from '../services/fetchContactList/fetchContactList'

const initialState: ContactPageSchema = {
  list: [],
  search: '',
  _inited: false,
  isLoading: true,
  error: undefined,
}

export const contactPageSlice = createSlice({
  name: 'contactPageSlice',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchContactList.fulfilled, (state, action) => {
        state.list = action.payload
        state.isLoading = false
        state._inited = true
      })
      .addCase(fetchContactList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: contactPageActions } = contactPageSlice
export const { reducer: contactPageReducer } = contactPageSlice
