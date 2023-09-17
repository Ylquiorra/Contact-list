import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/userSchema'
import { USER_STORAGE_TOKEN } from '@/shared/consts/localStorage'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const currentUser = localStorage.getItem(USER_STORAGE_TOKEN)

      if (currentUser) {
        state.authData = JSON.parse(currentUser)
      }
      state._inited = true
    },
    logOut: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_STORAGE_TOKEN)
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
