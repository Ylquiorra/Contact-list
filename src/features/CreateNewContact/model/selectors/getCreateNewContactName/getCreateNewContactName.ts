import { IStateSchema } from '@/app/providers/StoreProvider'

export const getCreateNewContactName = (state: IStateSchema) => state?.createNewContact?.name
