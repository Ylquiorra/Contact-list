import CommonCommands from './commands/common/CommonCommands'

Cypress.Commands.add('getByTestId', CommonCommands.getByTestId)

// @ts-ignore
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // common
      getByTestId(testId: string): Chainable<string>
    }
  }
}
