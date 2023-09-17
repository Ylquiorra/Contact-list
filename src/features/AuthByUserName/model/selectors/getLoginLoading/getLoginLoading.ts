import { IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginLoading = (state: IStateSchema) => state?.login?.isLoading
