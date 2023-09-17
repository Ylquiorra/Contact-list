import { IThunkConfig } from '@/app/providers/StoreProvider'
import { Contact } from '@/entities/Contact'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const updateContact = createAsyncThunk<void, Contact, IThunkConfig<string>>(
  'ContactsPage/updateContact',
  async (contactValue, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    const { id, avatarLink, name, phoneNumber, comment, additionalInformation } = contactValue

    const formData = {
      avatarLink,
      name,
      phoneNumber,
      comment,
      additionalInformation,
    }

    try {
      await extra.api.patch(`/contacts/${id}`, formData)
    } catch {
      return rejectWithValue('error')
    }
  },
)
