import { USER_STORAGE_TOKEN } from '@/shared/consts/localStorage'
import { User } from '@/entities/User'
import selectByTestid from '../../helpers/selectByTestId'

export const login = (username: string = 'user', password: string = '123') =>
  cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_STORAGE_TOKEN, JSON.stringify(body))
      return body
    })

export const getByTestId = (testId: string) => cy.get(selectByTestid(testId))

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>
      getByTestId(testId?: string): ReturnType<typeof cy.get>
    }
  }
}
