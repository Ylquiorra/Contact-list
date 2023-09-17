import { IStateSchema } from '@/app/providers/StoreProvider'

export const getContactSearch = (state: IStateSchema) => state?.contacts?.search
