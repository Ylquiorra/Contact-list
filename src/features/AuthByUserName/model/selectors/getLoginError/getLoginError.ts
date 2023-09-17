import { IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginError = (state: IStateSchema) => state?.login?.error
