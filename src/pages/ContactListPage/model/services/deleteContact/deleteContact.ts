import { IThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const deleteContact = createAsyncThunk<void, string, IThunkConfig<string>>(
  'ContactsPage/deleteContact',
  async (id, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      await extra.api.delete(`/contacts/${id}`)
    } catch {
      return rejectWithValue('error')
    }
  },
)
