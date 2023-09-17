import { IThunkConfig } from '@/app/providers/StoreProvider'
import { User, userActions } from '@/entities/User'
import { USER_STORAGE_TOKEN } from '@/shared/consts/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.post('/login', authData)

      if (!response.data) {
        throw new Error('error')
      }

      localStorage.setItem(USER_STORAGE_TOKEN, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch {
      return rejectWithValue('error')
    }
  },
)
