import { IStateSchema } from '@/app/providers/StoreProvider'

export const getContactError = (state: IStateSchema) => state?.contacts?.isLoading
