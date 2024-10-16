import React from 'react';
import { mount } from 'cypress/react';
import App from './App'; // Adjust the path to your App component
import './App.module.css'; // Ensure the CSS is loaded correctly

describe('App Component', () => {
  it('renders the title correctly', () => {
    mount(<App />);
    
    cy.get('h1').should('have.text', 'title');
    
    cy.get('div').should('have.class', 'appContainer');
  });
});
