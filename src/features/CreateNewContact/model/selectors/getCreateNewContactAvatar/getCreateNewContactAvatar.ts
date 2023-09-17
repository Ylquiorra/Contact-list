import { IStateSchema } from '@/app/providers/StoreProvider'

export const getCreateNewContactAvatar = (state: IStateSchema) => state?.createNewContact?.avatar
