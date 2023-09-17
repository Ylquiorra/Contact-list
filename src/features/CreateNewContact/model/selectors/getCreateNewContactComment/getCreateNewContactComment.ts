import { IStateSchema } from '@/app/providers/StoreProvider'

export const getCreateNewContactComment = (state: IStateSchema) => state?.createNewContact?.comment
