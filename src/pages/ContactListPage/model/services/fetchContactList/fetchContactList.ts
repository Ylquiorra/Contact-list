import { IThunkConfig } from '@/app/providers/StoreProvider'
import { Contact } from '@/entities/Contact'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getContactSearch } from '../../selectors/getContactSearch/getContactSearch'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

export const fetchContactList = createAsyncThunk<Contact[], void, IThunkConfig<string>>(
  'ContactsPage/fetchContactList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    const search = getContactSearch(getState())

    try {
      addQueryParams({
        search,
      })

      const response = await extra.api.get<Contact[]>('/contacts', {
        params: {
          q: search,
        },
      })

      if (!response.data) {
        throw new Error('error')
      }

      return response.data
    } catch {
      return rejectWithValue('error')
    }
  },
)
