describe('Angular Mapbox App', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('debe cargar la página principal', () => {
    cy.contains('Angular Mapbox App').should('be.visible');
  });

  it('debe mostrar el botón del mapa', () => {
    cy.contains('Ocultar mapa').should('be.visible');
  });

  it('debe ocultar el mapa al hacer click en el botón', () => {
    cy.contains('Ocultar mapa').click();
    cy.contains('Mostrar mapa').should('be.visible');
  });

});
