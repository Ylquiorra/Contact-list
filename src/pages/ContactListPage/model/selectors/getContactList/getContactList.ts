import { IStateSchema } from '@/app/providers/StoreProvider'

export const getContactList = (state: IStateSchema) => state?.contacts?.list
