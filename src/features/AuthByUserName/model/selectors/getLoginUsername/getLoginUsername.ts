import { IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginUsername = (state: IStateSchema) => state?.login?.login
