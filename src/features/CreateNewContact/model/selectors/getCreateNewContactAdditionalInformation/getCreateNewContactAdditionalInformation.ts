import { IStateSchema } from '@/app/providers/StoreProvider'

export const getCreateNewContactAdditionalInformation = (state: IStateSchema) =>
  state?.createNewContact?.additionalInformation
