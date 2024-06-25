describe('Pokedex', function() {
  it('Navigate from the main page to the page of a particular Pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.get('a[href="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})