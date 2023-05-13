/// <reference types='Cypress' />

import{Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import {LoginPageElements} from '../../../PageObjects/PageActions/LoginPageActions'


const LoginPageElementsInstance = new LoginPageElements();

describe('Page Object Model Tutorial', ()=>{

          Given('Visit the Orange HRM website',()=>{
                    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          })

          When('User provide username',()=>{
                    LoginPageElementsInstance.userName('Admin');
          })

          When('User provide password',()=>{
                    LoginPageElementsInstance.password('admin123');
          })
          
          Then('Click on the Login button to log in into the Orange HRM website',()=>{
                    LoginPageElementsInstance.clickLoginButton();
          })



})
