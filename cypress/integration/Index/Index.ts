/// <reference types="cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('go to application', () => {
  cy.visit('http://localhost:3000/')
})

Then('check app name and version text is shown', () => {
  cy.get('p').should('contain.text', 'at version')
})
