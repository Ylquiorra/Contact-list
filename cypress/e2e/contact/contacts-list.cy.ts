describe('Пользователь авторизировался и зашел на страницу с контактами', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('list')
    })
  })

  it('И контакты успешно загружаются', () => {
    cy.getByTestId('ContactList').should('exist')
    cy.getByTestId('ContactItem').should('have.length.greaterThan', 3)
  })

  it('И контакты успешно загружаются', () => {
    cy.getByTestId('ContactListFilters.SearchInput').type('Сидоров')
    cy.getByTestId('ContactItem').should('have.length.greaterThan', 1)
  })
})
