describe("Pizza Sipariş Formu Testleri", () => {

  it("Not alanına metin girilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get("textarea")
      .type("Bu bir nottur")
      .should("have.value", "Bu bir nottur");
  });


  it("Birden fazla malzeme seçilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(2).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(3).check().should("be.checked");
  });

  it("Form başarıyla gönderilebilmeli", () => {
  cy.visit("http://localhost:5173/order");

  cy.get("textarea").type("Test notu");

  cy.get('input[value="Orta"]').check();

  cy.get("select").select("orta");

  cy.get('input[type="checkbox"]').eq(0).check();
  cy.get('input[type="checkbox"]').eq(1).check();
  cy.get('input[type="checkbox"]').eq(2).check();
  cy.get('input[type="checkbox"]').eq(3).check();

  cy.contains("+").click();

  cy.get('button[type="submit"]').click();
});


});
