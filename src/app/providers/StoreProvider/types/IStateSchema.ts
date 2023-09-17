import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUserName'
import { NewContactSchema } from '@/features/CreateNewContact'
import { ContactPageSchema } from '@/pages/ContactListPage/model/types/contactPageSchema'

interface IStateSchema {
  user: UserSchema

  // async reducers
  login?: LoginSchema
  contacts?: ContactPageSchema
  createNewContact?: NewContactSchema
}

export default IStateSchema
