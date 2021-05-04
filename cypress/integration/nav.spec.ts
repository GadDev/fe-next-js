describe('Nav Menus', () => {
  context('Home Page', () => {
    // For desktop view
    context('720p resolution', () => {
      beforeEach(() => {
        const host = Cypress.config()['host'];
        cy.visit(host);
        /**
         * Run these tests as if in a desktop browser,
         * with a 720p monitor
         */
        cy.viewport(1280, 720);
      });
      describe('When you visit home', () => {
  
        describe('nav', () => {
          it('Should navigate to Home page', () => {
            cy.get('[data-testid=nav-item] > a').contains('Home').click();
            cy.url().should('include', '/');
          });
        });
      });
    });
  });
});
