import { IStateSchema } from '@/app/providers/StoreProvider'

export const getCreateNewContactPhoneNumber = (state: IStateSchema) => state?.createNewContact?.phoneNumber
