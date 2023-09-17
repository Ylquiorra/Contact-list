import { IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginPassword = (state: IStateSchema) => state?.login?.password
