describe('Login Step', () => {    
  it('Success Login1', () => {        //success login dan data yang ditampilkan benar
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
  })

  it('Success Login2', () => {        //success login, namun data yang ditampilkan tidak benar
    cy.visit('https://www.saucedemo.com/')    
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('be.visible')
  })

  it('Failed Login', () => {        //Gagal login karena salah username
    cy.visit('https://www.saucedemo.com/')    
    cy.get('[data-test="username"]').type('nadia')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})