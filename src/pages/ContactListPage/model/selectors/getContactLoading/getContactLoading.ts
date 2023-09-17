import { IStateSchema } from '@/app/providers/StoreProvider'

export const getContactLoading = (state: IStateSchema) => state?.contacts?.isLoading
