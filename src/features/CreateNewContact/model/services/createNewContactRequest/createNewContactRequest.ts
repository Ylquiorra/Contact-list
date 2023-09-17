import { IThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCreateNewContactName } from '../../selectors/getCreateNewContactName/getCreateNewContactName'
import { getCreateNewContactPhoneNumber } from '../../selectors/getCreateNewContactPhoneNumber/getCreateNewContactPhoneNumber'
import { getCreateNewContactComment } from '../../selectors/getCreateNewContactComment/getCreateNewContactComment'
import { getCreateNewContactAdditionalInformation } from '../../selectors/getCreateNewContactAdditionalInformation/getCreateNewContactAdditionalInformation'
import { getCreateNewContactAvatar } from '../../selectors/getCreateNewContactAvatar/getCreateNewContactAvatar'

export const createNewContactRequest = createAsyncThunk<void, void, IThunkConfig<string>>(
  'contact/createNewContact',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    const avatar = getCreateNewContactAvatar(getState()) ?? ''
    const name = getCreateNewContactName(getState())
    const phoneNumber = getCreateNewContactPhoneNumber(getState())
    const comment = getCreateNewContactComment(getState())
    const additionalInformation = getCreateNewContactAdditionalInformation(getState())

    const newContactData = {
      id: Date.now(),
      avatar,
      name,
      phoneNumber,
      comment,
      additionalInformation,
    }

    try {
      const response = await extra.api.post('/contacts', newContactData)

      if (!response.data) {
        throw new Error('error')
      }
      return response.data
    } catch {
      return rejectWithValue('error')
    }
  },
)
