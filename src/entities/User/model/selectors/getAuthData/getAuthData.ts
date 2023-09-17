import { IStateSchema } from '@/app/providers/StoreProvider'

export const getAuthData = (state: IStateSchema) => state.user.authData
