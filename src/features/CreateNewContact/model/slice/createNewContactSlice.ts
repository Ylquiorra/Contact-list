import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NewContactSchema } from '../types/newContactSchema'

const initialState: NewContactSchema = {
  avatar: '',
  name: '',
  comment: '',
  phoneNumber: '',
  additionalInformation: '',
}

export const createNewContactSlice = createSlice({
  name: 'createNewContact',
  initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload
    },
    setAdditionalInformation: (state, action: PayloadAction<string>) => {
      state.additionalInformation = action.payload
    },
    setClearForm: (state) => {
      state.name = ''
      state.phoneNumber = ''
      state.comment = ''
      state.additionalInformation = ''
    },
  },
})

export const { actions: createNewContactActions } = createNewContactSlice
export const { reducer: createNewContactReducer } = createNewContactSlice
